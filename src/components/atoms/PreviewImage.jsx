import { useAvatarImageSelector, useWearingImageSelector, useBackgroundImageSelector } from "stores/imageSrc"
import React, { useEffect, useRef } from 'react';
const cv = window.cv;

const previewAreaStyle = {
    margin: "auto",
    width: "50%",
    maxWidth: "450px",
    maxHeight: "450px",
    minWidth: "300px",
    minHeight: "300px",
}

const cancasStyle = {
    width: "900px",
    height: "900px"
}

export const PreviewImage = () => {

    const avatarImage = useAvatarImageSelector();
    const wearingImage = useWearingImageSelector();
    const backgroundImage = useBackgroundImageSelector();

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 900;
        canvas.height = 900;
        const context = canvas.getContext('2d');
        //TODO:それぞれの画像を任意の順番で描画する
        const avatarImageElm = new Image();
        const wearingImageElm = new Image();

        avatarImageElm.src = avatarImage;
        avatarImageElm.onload = () => {
            // context.drawImage(image, 0, 0, canvas.width, canvas.height);
            const mat = cv.imread(avatarImageElm);
            // cv.imshow(canvas, mat);
            calcAvatarArea(context, avatarImageElm);
        };
        wearingImageElm.src = wearingImage;
        wearingImageElm.onload = () => {
            // context.drawImage(image, 0, 0, canvas.width, canvas.height);
            const items = itemList(wearingImageElm);

            // itemSquareTileHorizontally(items, items.length, wearingImageElm, context, 530);
            // itemSquareTileVertically(items, items.length);
            // itemCircleTileHorizontally(items, items.length);
            // itemCircleTileVertically(items, items.length);
            itemCircleTileMiyaVertically(items, items.length, wearingImageElm, context);
            // itemSqKuronekoHorizontally(items, items.length);
        };
    }, [avatarImage, wearingImage, backgroundImage]);

    return (
        <>
            {/* <img id="previewArea" className="rounded mx-auto d-blockd imageArea" src="http://via.placeholder.com/900x900" style={previewAreaStyle}></img> */}
            <canvas ref={canvasRef} style={cancasStyle} className="bg-img-transparent"></canvas>
        </>
    )
}

function itemList(imgElement) {
    console.log("itemlist")
    // グレスケ
    let grayImg = gray(imgElement);

    // 2値化(閾値144)
    let thresholdImg = threshold(grayImg, 144);

    // VIP枠を隠す
    let hideVipImg = hideVip(thresholdImg, grayImg);

    // もう一度2値化(閾値155)
    let thresholdImg2 = threshold(hideVipImg, 155);

    // アイテム用枠を探し出す
    let contours = findContours(thresholdImg2);
    let items = rectangleArea(1.2, 1.34, contours);
    return items;
    // itemTileHorizontally(ctx, items, items.length, imgElement);
}

// グレースケール化
// imgElementを渡されると、グレスケ化して返却
function gray(imgElement){
    let mat = cv.imread(imgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    return dst;
}

// 2値化
// グレスケ画像と閾値を渡されると、閾値で2値化したものを返却
function threshold(grayImg, thresholdValue) {
    let thresholdImg = new cv.Mat();
    cv.threshold(grayImg, thresholdImg, thresholdValue, 255, cv.THRESH_BINARY_INV);

    return thresholdImg;
}

// VIP枠判定
// VIP用に2値化された画像とグレスケ画像を渡されると、VIP枠を白い矩形で隠したグレスケ画像を返却
function hideVip(thresholdImg, grayImg) {
    let contours = findContours(thresholdImg);
    let items = rectangleArea(0.53, 1.1, contours);
    let rectangleColor = new cv.Scalar(255, 255, 255, 255);
    items.forEach(function(item){
        const point1 = new cv.Point(item[0], item[1]);
        const point2 = new cv.Point(item[0] + item[2]*2, item[1] + item[3]*2);
        cv.rectangle(grayImg, point1, point2, rectangleColor, cv.FILLED);
    });
    return grayImg;
}

// 輪郭を抽出する
// 2値化された画像を渡されると、輪郭点とヒエラルキーを返却
function findContours(thresholdImg) {
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(thresholdImg, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    return contours;
}

// 矩形判定
// 縦横比(h/w)と輪郭点とヒエラルキーを渡されると、矩形判定されたものの位置と数を返却
function rectangleArea(minAspectRatio=0, maxAspectRatio=2, contours) {
    var items = [[]];

    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        return
    }

    // 矩形判定
    for (let i=0; i<contours.size(); i++) {
        const rect = cv.boundingRect(contours.get(i));
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;

        // 矩形度合いの計測
        const val = rectangularity(contours.get(i));
        // 矩形度合いが高いもの、かつ正方形に近いものをアイテムとして認識する
        if (0.90<val && val<0.94 && minAspectRatio < h/w && h/w <maxAspectRatio && 50<w){
            items.unshift([x,y,w,h]);
        }
    }
    // itemsのいちばんうしろには不要な配列があるので消す
    items.pop();
    console.log("アイテムの数", items.length);
    return items;
}

/// 矩形度合いの計測
/// 1に近いほど矩形に近い形をしている
function rectangularity(contour) {
    const area = cv.contourArea(contour);
    const rectW = cv.minAreaRect(contour).size.width;
    const rectH = cv.minAreaRect(contour).size.height;

    if (rectW != 0 && rectH != 0) {
        return area / rectW / rectH;
    } else {
        return 0;
    }
}

/// アイテムを正方形にトリミングし、2段に並べる
function itemSquareTileHorizontally(items, itemNum, imageElm, ctx, n=530) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;
        // 所持数隠しの円のサイズ
        const r = imageElm.height/imageElm.width>2 ? 34 : 19;

        // 角丸矩形でクリッピング
        ctx.save();
        drawsq(ctx, 180 * (i%5) + 7, 180 * Math.floor(i/5) + 15+n, 165, 165, 12);
        ctx.clip();
        ctx.drawImage(imageElm, x, y, w, h, 180 * (i%5) + 7, 180 * Math.floor(i/5) + 15+n, 165, 165);
        // 所持数隠し
        ctx.beginPath();
        ctx.arc(180 * (i%5) + 166, 180 * Math.floor(i/5) + 15+n, r, 0, Math.PI * 2, true);
        ctx.fillStyle = "white";
        ctx.fill()

        ctx.restore(); // クリッピング領域の設定を破棄
    }
}

// みやさんテンプレ用
function itemCircleTileMiyaVertically(items, itemNum, imageElm, ctx) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;

        // 円でクリッピング
        ctx.save();
        drawCircle(ctx, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5, 47.5);
        console.log(i, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5)
        ctx.clip();
        ctx.drawImage(imageElm, x, y, w, h, 716 * (i%2) + 44, 108 * Math.floor(i/2) + 318, 95, 95);

        ctx.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(ctx, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5, 47.5, 3, "white");
    }
}

function drawsq(ctx, x, y, w, h, r, lineWidth = 10) {
    const color = "rgb(214,215,218)";
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x, y + r);  //←①
    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true);  //←②
    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, 1);  //←③
    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, 1);  //←④
    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, 1);  //←⑤
    ctx.closePath();  //←⑥
    ctx.stroke();  //←⑦
    ctx.fill();  //←⑧
}

// 円を描画する（クリッピングのため）
function drawCircle(ctx, dx, dy, r) {
    const color = "rgb(214,215,218)"
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.closePath();	// closeさせる
    ctx.stroke();  // 線ひく
    ctx.fill();  // 中を塗る
    ctx.restore();
}

// 円を描画する（縁取り用）
function drawCircleEdge(ctx, dx, dy, r, weight = 5, color = "rgb(214,215,218)") {
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = weight;
    ctx.stroke();
}

function calcAvatarArea(ctx, avatarImgElement) {

    // グレースケール
    const avatarMat = cv.imread(avatarImgElement, cv.IMREAD_UNCHANGED);
    let avatarDst = new cv.Mat();
    cv.cvtColor(avatarMat, avatarDst, cv.COLOR_RGBA2GRAY, 0);
    // 白黒反転して2値化
    let avatarThreshold = new cv.Mat();
    cv.threshold(avatarDst, avatarThreshold, 1, 255, cv.THRESH_BINARY);
    // 輪郭取得
    let avatarContours = new cv.MatVector();
    let avatarHierarchy = new cv.Mat();
    cv.findContours(avatarThreshold, avatarContours, avatarHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // アバターの表示領域を見つける
    let avatarTmpRect = {
        x1: [], y1: [], x2: [], y2: []
    }
    for (let i=0; i<avatarContours.size(); i++){
        const ret = cv.boundingRect(avatarContours.get(i));
        avatarTmpRect.x1.push(ret.x);
        avatarTmpRect.y1.push(ret.y);
        avatarTmpRect.x2.push(ret.x + ret.width);
        avatarTmpRect.y2.push(ret.y + ret.height);
    }

    avatarTmpRect.x1 = Math.min(...avatarTmpRect.x1);
    avatarTmpRect.y1 = Math.min(...avatarTmpRect.y1);
    avatarTmpRect.x2 = Math.max(...avatarTmpRect.x2);
    avatarTmpRect.y2 = Math.max(...avatarTmpRect.y2);

    // アバターの表示領域

    const avatarRect = {
        x: avatarTmpRect.x1, y: avatarTmpRect.y1, w: avatarTmpRect.x2-avatarTmpRect.x1, h: avatarTmpRect.y2-avatarTmpRect.y1
    };
    // アバターを900x900内に収めた時のサイズ
    const avatarResized = {
        w: avatarRect.w, h: avatarRect.h
    };
    // サイズ調整
    avatarResized.w *= 510 / avatarRect.h;
    avatarResized.h *= 510 / avatarRect.h;
    console.log("アバターの表示領域：",avatarRect);
    console.log("リサイズ：",avatarResized);

    ctx.drawImage(
        avatarImgElement,
        avatarRect.x,
        avatarRect.y,
        avatarRect.w,
        avatarRect.h,
        (900-avatarResized.w)/2,
        10,
        avatarResized.w,
        avatarResized.h
    )
}