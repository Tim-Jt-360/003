var APP_DATA = {
  "scenes": [
    {
      "id": "0-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5534475393974052,
          "pitch": 0.12998082163419866,
          "rotation": 0,
          "target": "3-wc"
        },
        {
          "yaw": 0.12471319377611678,
          "pitch": 0.31063146757979254,
          "rotation": 0,
          "target": "5-wohnen"
        },
        {
          "yaw": 0.8409207481874912,
          "pitch": 0.01790456122278883,
          "rotation": 0,
          "target": "4-zimmer-1"
        },
        {
          "yaw": 2.130106199057849,
          "pitch": 0.05933209892878466,
          "rotation": 0,
          "target": "2-zimmer-2"
        },
        {
          "yaw": 3.0089758920579133,
          "pitch": 0.368426073684585,
          "rotation": 0,
          "target": "1-essen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-essen",
      "name": "Essen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9105570743521412,
          "pitch": 0.0787771285882286,
          "rotation": 0,
          "target": "2-zimmer-2"
        },
        {
          "yaw": 2.846608286796722,
          "pitch": 0.4271654834138161,
          "rotation": 0,
          "target": "0-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zimmer-2",
      "name": "Zimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.74077654050404,
          "pitch": 0.05402215476559036,
          "rotation": 0,
          "target": "1-essen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0941604218039824,
          "pitch": 0.5179485737271712,
          "rotation": 0,
          "target": "0-kche"
        },
        {
          "yaw": 2.9588001781909536,
          "pitch": 0.017718192204148053,
          "rotation": 0,
          "target": "4-zimmer-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-zimmer-1",
      "name": "Zimmer 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.913453756966369,
          "pitch": 0.18043507522138214,
          "rotation": 0,
          "target": "5-wohnen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wohnen",
      "name": "Wohnen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7465771856859087,
          "pitch": -0.003484216689706443,
          "rotation": 0,
          "target": "4-zimmer-1"
        },
        {
          "yaw": -2.927628942143688,
          "pitch": 0.48798250529615217,
          "rotation": 0,
          "target": "0-kche"
        },
        {
          "yaw": -2.134804160013081,
          "pitch": 0.054915477859085016,
          "rotation": 0,
          "target": "3-wc"
        },
        {
          "yaw": 0.060998951200986085,
          "pitch": 0.0023767086471444543,
          "rotation": 0,
          "target": "6-wintergarten"
        },
        {
          "yaw": -3.072593977269614,
          "pitch": 0.24785401763844916,
          "rotation": 0,
          "target": "1-essen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wintergarten",
      "name": "Wintergarten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0193982946467095,
          "pitch": 0.5302053946188074,
          "rotation": 0,
          "target": "5-wohnen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PASSAGE Wallisellen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
