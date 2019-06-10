"use strict";
// author(s):  Patrice-Morgan Ongoly
// version: 0.3.0
// last modified: Friday, January 11, 2019 10:13 PST
// description: 

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var WhichBrowser = require('which-browser');
// main application instance

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 3000,
    DIRECTORY: [
        './',  //0
        './css',  //1
        './js', //2
        './media/audio', //3
        './media/icon', //4
        './media/img', //5
        './media/pattern', //6 
        './media/model', //7
        './media/texture', //8
        './room', //9
        './media/video', //10
    ],
    deviceType: null
};

var dir = config.DIRECTORY;

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('/'));

var MENU_REVEALED = false;
var SELECTION_COUNTER = null
var PALM_POINT = null;
var PRESSING_ON_SELECTION_MATRIX = [
        [
            {
                id: 'new-option',
                name: 'new',
                pocket: {
                    item: 0,
                    count: function(){
                        this.range.count++;
                    },
                    range: {
                        x1: 75,
                        x2: 200,
                        y1: 400,
                        y2: 500,
                        count: 0
                    },
                    SELECTION_MADE: false,
                },
            },
            {
                id: 'load-option',
                name: 'load',
                pocket: {
                    item: 1,
                    count: function(){
                        this.range.count++;
                    },
                    range: {
                        x1: 300,
                        x2: 400,
                        y1: 400,
                        y2: 500,
                        count: 0
                    },
                    SELECTION_MADE: false,
                },
            },
            {
                id: 'info-option',
                name: 'info',
                pocket: {
                    item: 2,
                    count: function(){
                        this.range.count++;
                    },
                    range: {
                        x1: 500,
                        x2: 600,
                        y1: 400,
                        y2: 500,
                        count: 0
                    },
                    SELECTION_MADE: false,
                }
            }
        ]
    ];

function checkInitialDeviceConnectionType(headers, ip){
    let result = new WhichBrowser(headers);
    console.log(result.toString());

    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        config.deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        config.deviceType = 'mobile';
    }
}

/////////// EXPRESS APP FUNCTIONS ////////
app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    res.render('index.html',{root: dir[0]});
});

app.get('/streamproc', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    res.render('streamproc.html',{root: dir[0]});
});

app.get('/pARk', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering pARk application teaser page...') 
    res.render('pARk.html',{root: dir[0]});
});

app.get('/game', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('requesting DIA from pARk... \n rendering game. \n') 
    res.render('game.html',{root: dir[0]});
});

app.get('/snackshack', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('requesting DIA from pARk... \n rendering snack shack. \n') 
    res.render('snackshack.html',{root: dir[0]});
});

app.get('/cARd', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering cARd application teaser page...') 
    res.render('cARd.html',{root: dir[0]});
});

app.get('/tutorial', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering tutorial page.') 
    res.render('tutorial.html',{root: dir[0]});
});

app.get('/intro', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering intro page.') 
    res.render('intro.html',{root: dir[0]});
});

app.get('/syllabus', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering intro page.') 
    res.render('syllabus.html',{root: dir[0]});
});

app.get('/corinth', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering intro page.') 
    res.render('corinth.html',{root: dir[0]});
});

app.get('/lyoko', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering intro page.') 
    res.render('lyoko.html',{root: dir[0]});
});

app.get('/w', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering intro page.') 
    res.render('writers.html',{root: dir[0]});
});

app.get('/v', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering v roster page.') 
    res.render('v.html',{root: dir[0]});
});

app.get('/pamo', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering patrice-morgan roster page.') 
    res.render('pamo.html',{root: dir[0]});
});

app.get('/shoppXR', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering shoppXR app.') 
    res.render('shoppXR.html',{root: dir[0]});
});

app.get('/realtXR', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering realtXR app.') 
    res.render('realtXR.html',{root: dir[0]});
});

app.get('/docs/tutorials/musicplayXR', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering software roster page.') 
    res.render('musicPlayerTutorial.html',{root: dir[0]});
});

app.get('/docs/tutorials/curatXR', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering software roster page.') 
    res.render('curatorTutorial.html',{root: dir[0]});
});

app.get('/docs/examples', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering software roster page.') 
    res.render('tutorials.min.html',{root: dir[0]});
});

app.get('/docs/software', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering software roster page.') 
    res.render('software.html',{root: dir[0]});
});

app.get('/docs/hardware', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering hardware roster page.') 
    res.render('hardware.html',{root: dir[0]});
});

app.get('/docs/platform', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering platform roster page.') 
    res.render('platform.html',{root: dir[0]});
});

app.get('/docs/community', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var headers = req.headers;
    checkInitialDeviceConnectionType(headers, ip);
    
    console.log('rendering community roster page.') 
    res.render('community.html',{root: dir[0]});
});

app.get('/css/:stylesheet_id', function(req, res){
    var stylesheet_id = req.params.stylesheet_id;
    res.sendFile(stylesheet_id, {root: dir[1]});
});

app.get('/css/Fonts/5218298/:font_id', function(req, res){
    var font_id = req.params.font_id;
    res.sendFile(font_id, {root: './css/Fonts/5218298'});
});

app.get('/js/:script_id', function(req, res){
    var script_id = req.params.script_id;
    res.sendFile(script_id, {root: dir[2]});
});

app.get('/media/audio/:audio_id', function(req, res){
    var audio_id = req.params.audio_id;
    res.sendFile(img_id, {root: dir[3]});
});

app.get('/media/icon/:icon_id', function(req, res){
    var icon_id = req.params.icon_id;
    res.sendFile(icon_id, {root: dir[4]});
});

app.get('/media/img/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[5]});
});

app.get('/media/pattern/:pattern_id', function(req, res){
    var pattern_id = req.params.pattern_id;
    res.sendFile(pattern_id, {root: dir[6]});
});

app.get('/media/texture/:texture_id', function(req, res){
    var texture_id = req.params.texture_id;
    res.sendFile(texture_id, {root: dir[8]});
});

app.get('/room/:room_id', function(req, res){
    var room = req.params.room_id;
    console.log(`looking for room ${room}`);
    res.sendFile(room+'.html',{root: dir[9]});
});

app.get('/media/video/:video_id', function(req, res){
    var video_id = req.params.video_id;
    res.sendFile(video_id, {root: dir[10]});
});

var io = require('socket.io').listen(app.listen(config.PORT, function(){
    console.log(`[0] listening on port ${config.PORT}`);
}));

var subjects = [];
var imgPreloader = [];

function stashCanvas(data){
    // {buf: bufArray, rows: resizedImg.rows, cols: resizedImg.cols, type: 'hand'}
    imgPreloader.push(data);    
}

function paintCanvasFromStash(){
    let rawCanvas = imgPreloader;
    imgPreloader = [];
    return rawCanvas;
}

var objectsInSceneHandler = {
    points: [],
    adding: false,
    saveLastVertex: false,
    gestureInterval: null,
    starter: null,
    webcam: null,
    objectList: [],
    build: {
        markup: ''
    }
};

function landmarkTrackingTest(source){
    var channel = source;
    console.log('launch landmark orientation handling function');
    console.log(channel.id);
    gestureTrackingTest(channel, 0, 100);
}

function gestureTrackingTest(source, target, renderRate){
    var delayInterval = renderRate;
    var objectTarget = target;
    var socket = source;
    
    console.log('TODO: add gesture tracking test');
    
    const cv = require('opencv4nodejs');
    
    const skinColorUpper = hue => new cv.Vec(hue, 0.8 * 255, 0.6 * 255);
    const skinColorLower = hue => new cv.Vec(hue, 0.1 * 255, 0.05 * 255);
    
    /*
    const skinColorUpper = hue => new cv.Vec(hue, 0.8 * 255, 0.6 * 255);
    const skinColorLower = hue => new cv.Vec(hue, 0.3 * 255, 0.15 * 255);
    */
    
    const devicePort = 0;
    
    objectsInSceneHandler.webcam = new cv.VideoCapture(devicePort);
    const wCap = objectsInSceneHandler.webcam;
    
    
    const makeHandMask = function(img){
      // filter by skin color
        const imgHLS = img.cvtColor(cv.COLOR_BGR2HLS);
        const rangeMask = imgHLS.inRange(skinColorLower(0), skinColorUpper(15));

      // remove noise
        const blurred = rangeMask.blur(new cv.Size(10, 10));
        const thresholded = blurred.threshold(200, 255, cv.THRESH_BINARY);

        return thresholded;
    };
    
    const getHandContour = function(handMask){
        const contours = handMask.findContours(cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
      // largest contour
        return contours.sort((c0, c1) => c1.area - c0.area)[0];
    };
    
    const getRoughHull = function(contour, maxDist) {
  // get hull indices and hull points
        const hullIndices = contour.convexHullIndices();
        const contourPoints = contour.getPoints();
        const hullPointsWithIdx = hullIndices.map(idx => ({
            pt: contourPoints[idx],
            contourIdx: idx
        }));
  
        const hullPoints = hullPointsWithIdx.map(ptWithIdx => ptWithIdx.pt);

  // group all points in local neighborhood
  
        const ptsBelongToSameCluster = (pt1, pt2) => ptDist(pt1, pt2) < maxDist;
        const { labels } = cv.partition(hullPoints, ptsBelongToSameCluster);
        const pointsByLabel = new Map();
        labels.forEach(l => pointsByLabel.set(l, []));
  
        hullPointsWithIdx.forEach((ptWithIdx, i) => {
            const label = labels[i];
            pointsByLabel.get(label).push(ptWithIdx);
        });

  // map points in local neighborhood to most central point

        const getMostCentralPoint = function(pointGroup) {
        // find center
            const center = getCenterPt(pointGroup.map(ptWithIdx => ptWithIdx.pt));
            PALM_POINT = center;
        // sort ascending by distance to center
            return pointGroup.sort((ptWithIdx1, ptWithIdx2) => ptDist(ptWithIdx1.pt, center) - ptDist(ptWithIdx2.pt, center))[0];
        };
        const pointGroups = Array.from(pointsByLabel.values());
      // return contour indices of most central points
        return pointGroups.map(getMostCentralPoint).map(ptWithIdx => ptWithIdx.contourIdx);
    };
    
    const getHullDefectVertices = function(handContour, hullIndices) {
        const defects = handContour.convexityDefects(hullIndices);
        const handContourPoints = handContour.getPoints();

      // get neighbor defect points of each hull point
        const hullPointDefectNeighbors = new Map(hullIndices.map(idx => [idx, []]));
        defects.forEach((defect) => {
            const startPointIdx = defect.at(0);
            const endPointIdx = defect.at(1);
            const defectPointIdx = defect.at(2);
            hullPointDefectNeighbors.get(startPointIdx).push(defectPointIdx);
            hullPointDefectNeighbors.get(endPointIdx).push(defectPointIdx);
        });

        return Array.from(hullPointDefectNeighbors.keys())
        // only consider hull points that have 2 neighbor defects
        .filter(hullIndex => hullPointDefectNeighbors.get(hullIndex).length > 1)
        // return vertex points
        .map((hullIndex) => {
            const defectNeighborsIdx = hullPointDefectNeighbors.get(hullIndex);
            return ({
                pt: handContourPoints[hullIndex],
                d1: handContourPoints[defectNeighborsIdx[0]],
                d2: handContourPoints[defectNeighborsIdx[1]]
            });
        });
    };
    
    const filterVerticesByAngle = function(vertices, maxAngleDeg){
        vertices.filter(function(v) {
            const sq = x => x * x;
            const a = v.d1.sub(v.d2).norm();
            const b = v.pt.sub(v.d1).norm();
            const c = v.pt.sub(v.d2).norm();
            const angleDeg = Math.acos(((sq(b) + sq(c)) - sq(a)) / (2 * b * c)) * (180 / Math.PI);
            return angleDeg < maxAngleDeg;
        });
        return vertices;
    }
    
            // returns distance of two points
    const ptDist = function(pt1, pt2){
        return pt1.sub(pt2).norm();  
    } 
    // returns center of all points
    const getCenterPt = pts => 
    pts.reduce((sum, pt) => sum.add(pt), new cv.Point(0, 0)).div(pts.length);
    const blue = new cv.Vec(255, 0, 0);
    const green = new cv.Vec(0, 255, 0);
    const red = new cv.Vec(0, 0, 255);
    
    const pointColor = new cv.Vec(255, 255, 255); // COLOR OF THE HAND MASK
    
    objectsInSceneHandler.gestureInterval = setInterval(function(){
        wCap.readAsync(function(err, frame){
            if(frame.empty){
                wCap.reset();
            }
            frame = wCap.read();
                        // const { grabFrames } = require('./utils'); <-- investigate this function

            // main
            const resizedImg = frame.resize(510, 680);  // resizeToMax(680);

            const handMask = makeHandMask(resizedImg);
            const handContour = getHandContour(handMask);
            if (!handContour) {
                return;
            }

            const maxPointDist = 25;
            const hullIndices = getRoughHull(handContour, maxPointDist);

              // get defect points of hull to contour and return vertices
              // of each hull point to its defect points
            const vertices = getHullDefectVertices(handContour, hullIndices);

              // fingertip points are those which have a sharp angle to its defect points

            const maxAngleDeg = 60;
            
            const verticesWithValidAngle = filterVerticesByAngle(vertices, maxAngleDeg);
            
            //var drawThatCircle = false;
            //var vertext;

    
            //const result = resizedImg.copy();
            //const ballScene = resizedImg.copy();
              // draw bounding box and center line

            resizedImg.drawContours([handContour], pointColor, { thickness: 2 }); //previous version: blue
            
                        
          if(verticesWithValidAngle[0]!=undefined){
            try{
                
                const xValue = PALM_POINT.x;
                const yValue = PALM_POINT.y;
                const vertext = verticesWithValidAngle[0].pt;
                //console.log(`[0] x ${xValue} | y ${yValue}`);
                console.log(PALM_POINT);
                /*console.log(`[1] ${verticesWithValidAngle[1].pt.x} | ${verticesWithValidAngle[1].pt.x}`);
                console.log(`[2] ${verticesWithValidAngle[2].pt.x} | ${verticesWithValidAngle[2].pt.x}`);
                console.log(`[3] ${verticesWithValidAngle[3].pt.x} | ${verticesWithValidAngle[3].pt.x}`);
                console.log(`[4] ${verticesWithValidAngle[4].pt.x} | ${verticesWithValidAngle[4].pt.x}`);
                */
                if(SELECTION_COUNTER!=null&&!MENU_REVEALED){
                    let now = new Date().getTime();
                    let elapsed = now - SELECTION_COUNTER;
                    elapsed = Math.abs(elapsed);
                    if(elapsed>5000){
                        socket.emit('revealMenuXRComponents', {status: true});
                        //MENU_REVEALED = true;
                    }
                }
                if(xValue>PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.x1&&xValue<PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.x2){
                        
                    if(yValue>PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.y1&&yValue<PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.y2){
                        console.log('selecting the new option item: ', PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE);
                        if(!PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE){
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.count();
                        }
                        if(PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.count>3&&PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE==false){
                            SELECTION_COUNTER = new Date().getTime();
                            
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE = true;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE = false;
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE = false;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.count = 0;
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.count = 0;
                            console.log('SELECTION MADE FOR new');
                            socket.emit('selectionMadeForItem', {selection: '#new-option'});
                        }
                    }
                }
                else if(xValue>PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.x1&&xValue<PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.x2){
                    if(yValue>PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.y1&&yValue<PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.y2){
                        console.log('selecting the load option item: ', PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE);
                        if(!PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE){
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.count();
                        }
                        if(PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.count>3&&PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE==false){
                            SELECTION_COUNTER = new Date().getTime();
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE = true;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE = false;
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE = false;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.count = 0;
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.count = 0;
                            console.log('SELECTION MADE FOR load');
                            socket.emit('selectionMadeForItem', {selection: '#load-option'});
                        }
                    }
                }
                else if(xValue>PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.x1&&xValue<PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.x2){
                    if(yValue>PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.y1&&yValue<PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.y2){
                        console.log('selecting the info option item: ', PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE);
                        if(!PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE){
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.count();
                        }
                        if(PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.count>3&&PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE==false){
                            SELECTION_COUNTER = new Date().getTime();
                            PRESSING_ON_SELECTION_MATRIX[0][2].pocket.SELECTION_MADE = true;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.SELECTION_MADE = false;
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.SELECTION_MADE = false;
                            
                            PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.count = 0;
                            PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.count = 0;
                            console.log('SELECTION MADE FOR info');
                            socket.emit('selectionMadeForItem', {selection: '#info-option'});
                        }
                    }
                }
                /*else{
                    console.log(xValue);  
                }*/
                //ballScene.drawCircle(vertext, 20, pointColor, -5);       // previous version: 50, blueblue
                
                if(objectsInSceneHandler.saveLastVertex){
                    objectsInSceneHandler.points.push(vertext);
                    objectsInSceneHandler.saveLastVertex = false;
                    
                    socket.emit('getCurrentObjectType', {index: objectsInSceneHandler.points.length});
                    
                    console.log('object position recorded.')
                    console.log(`there are currently ${objectsInSceneHandler.points.length} custom objects in this scene.`);
                }
            }catch(err){
                console.log(err);
            }
                
           }
              // draw points and vertices
           /* verticesWithValidAngle.forEach(function(v){
                //console.log(`x ${v.pt.x} | y ${v.pt.y}`);
                
                // previous version: the section below was not commented out
                
            /*    resizedImg.drawLine( v.pt, v.d1, { color: green, thickness: 2 });
                resizedImg.drawLine(v.pt, v.d2, { color: green, thickness: 2 });*/
             /*   resizedImg.drawEllipse(
                    new cv.RotatedRect(v.pt, new cv.Size(10, 10), 0), // previous version: cv.Size(20, 20, 0)
            
                    { color: red, thickness: 2 }
                );
                
                /*result.drawEllipse(
                    new cv.RotatedRect(v.pt, new cv.Size(10, 10), 0), // previous version: cv.Size(20, 20, 0)
                    { color: red, thickness: 2 }
                );*/
         /*   }); VERTICES REMOVED TO TEST SPEED INCREASE */
            
            for(var i=0; i<objectsInSceneHandler.points.length; i++){
                resizedImg.drawCircle(objectsInSceneHandler.points[i], 25, green, -5);
                //ballScene.drawCircle(objectsInSceneHandler.points[i], 25, red, -5);
            }
              // display detection result  
            const numFingersUp = verticesWithValidAngle.length-2;
    
            /*resizedImg.drawRectangle(   //was "result" copy
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.x1, PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.y1),
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.x2, PRESSING_ON_SELECTION_MATRIX[0][0].pocket.range.y2),
                { color: red, thickness: 2 }            
            );
            
            resizedImg.drawRectangle(   //was "result" copy
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.x1, PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.y1),
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.x2, PRESSING_ON_SELECTION_MATRIX[0][1].pocket.range.y2),
                { color: green, thickness: 2 }            
            );
            
            resizedImg.drawRectangle(   //was "result" copy
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.x1, PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.y1),
                new cv.Point(PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.x2, PRESSING_ON_SELECTION_MATRIX[0][2].pocket.range.y2),
                { color: blue, thickness: 2 }            
            );*/

            const fontScale = 2;
    
          /*  resizedImg.putText(
                String(numFingersUp),
                new cv.Point(20, 60),
                cv.FONT_ITALIC,
                fontScale,
                { color: green, thickness: 2 }
            );
*/
            
            /*const { rows, cols } = result;
            
            if(objectTarget==0){
                const sideBySide = new cv.Mat(rows, cols * 2, cv.CV_8UC3);
                //ballScene.copyTo(sideBySide.getRegion(new cv.Rect(0, 0, cols, rows)));//result
                resizedImg.copyTo(sideBySide.getRegion(new cv.Rect(cols, 0, cols, rows)));
                
                //cv.imshow('handMask', handMask);
                cv.imshow('result', sideBySide); //sideBySide= a combination of result and resizedImg  result = circled finger tips only; resizedImg = vertex covered hand (green and blue lines, red circles)
                
                cv.waitKey(9); 
            }
            else*/
            if(objectTarget==1){
                    /* Hand mesh*/
                const matRGBA = resizedImg.channels === 1
                      ? resizedImg.cvtColor(cv.COLOR_GRAY2RGBA)
                      : resizedImg.cvtColor(cv.COLOR_BGR2RGBA);
                var bufArray = matRGBA.getData();
                // console.log(bufArray);
                stashCanvas({buf: bufArray, rows: resizedImg.rows, cols: resizedImg.cols, type: 'hand'});
        
                // socket.emit('paintCanvas', {buf: bufArray, rows: resizedImg.rows, cols: resizedImg.cols, type: 'hand'});/**/    
                //}                
            }
        });    
    }, delayInterval);    
}

function facialRecognitionTest(source, target, renderRate){
    
    var delayInterval = renderRate;
    var socket = source;
    var outputTarget = target;
    
    const cv = require('opencv4nodejs');

    const devicePort = 0;
    const wCap = new cv.VideoCapture(devicePort);

    socket.emit('captureResponse', {
        status: 0,
        health: 'good'
    });

    const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
    //var interval = setInterval(function(){
        //frame = wCap.read();
    objectsInSceneHandler.starter = setInterval(function(){
        wCap.readAsync(function(err, frame){
            if(frame.empty){
                wCap.reset();
            }
            frame = wCap.read();
            //cv.imshow('frame', res);
            //cv.imwrite('./media/capture/cap1.png', frame);
            const resizeFrame = frame.resizeToMax(640);
            const grayImg = resizeFrame.bgrToGray();

            classifier.detectMultiScaleAsync(grayImg, function(err, res){
                if (err) { return console.error(err); }

                const { objects, numDetections } = res;
              //  console.log(objects);
            //  console.log(numDetections);

                if (!objects.length) {
                    console.log('no face detected');
                    
                    return;
                }
                
                let rectData = null;
                  // draw detection
                const facesImg = resizeFrame.copy();
                const numDetectionsTh = 10;
                objects.forEach(function(rect, i){
                    const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                    const drawRect = facesImg.drawRectangle(rect, cv.Vec(255, 0, 0), 2, cv.LINE_8);
                    rectData = rect;
                    //console.log(rect);
                    //drawBlueRect(facesImg, rect, { thickness });
                });
                
                if(outputTarget==0){
                   cv.imshow('frame', facesImg);
                }
                else if(outputTarget==1){
                    // convert your image to rgba color space
                    const matRGBA = facesImg.channels === 1
                      ? facesImg.cvtColor(cv.COLOR_GRAY2RGBA)
                      : facesImg.cvtColor(cv.COLOR_BGR2RGBA);

                    var bufArray = matRGBA.getData();

                   // console.log(bufArray);

                    socket.emit('paintCanvas', {buf: bufArray, rows: facesImg.rows, cols: facesImg.cols, type: 'face', rectangle: rectData});   
                }
                else{
                    console.log('no specified output target for processing results');
                }
            });

            cv.waitKey(10);

        });
    }, delayInterval);
}

io.sockets.on('connection', function(socket){
    var conn = socket;
    console.log('client connected.');
    console.log(conn.id);
    subjects.push(conn);
    
    ///////
    
    socket.on('menuXRComponentsRevealed', function(data){
        MENU_REVEALED = data.status;
        console.log(`reveal menu xr components request \n sent \n ${data.status} cycle ${data.meta}`);
    });
    
    socket.on('createScene', function(data){
        let ori = data.orientation;
        
        socket.emit('clearInitialVideoFeed', {status: 1});
        
        switch(ori){
            case 0: // landmark oriented
                landmarkTrackingTest(conn);
                break;
            case 1: // face oriented
                //facialRecognitionTest(socket, 0, 100);
                facialRecognitionTest(conn, 1, 160);
                break;
            case 2: // hand oriented
                //gestureTrackingTest(socket, 0, 100);
                gestureTrackingTest(conn, 1, 160);
                //gestureTrackingTest(socket, 1, 1000);
                break;
            default:
                console.log('no associated orientation found');
                break;
        }
        
        socket.emit('transitionToBuildView', {buildType: ori});
    });
    
    socket.on('checkHandMaskProcessing', function(data){
        if(data.status){
            let stash = paintCanvasFromStash();
            socket.emit('paintCanvasFromStash', {canvas: stash});
        }
    });

    ///////
    socket.on('disconnect', function(){
        console.log(`socket ${conn.id} disconnected.`);
    });
});