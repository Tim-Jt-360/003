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
          "yaw": 2.8896309994866503,
          "pitch": 0.52437961450598,
          "rotation": 0,
          "target": "1-essen"
        },
        {
          "yaw": 0.10361085426003669,
          "pitch": 0.36070806782424114,
          "rotation": 0,
          "target": "5-wohnen"
        },
        {
          "yaw": -0.55430773619306,
          "pitch": 0.06243407790163502,
          "rotation": 0,
          "target": "3-wc"
        },
        {
          "yaw": 2.167887741411345,
          "pitch": 0.022150792289647114,
          "rotation": 0,
          "target": "2-zimmer-2"
        },
        {
          "yaw": 0.8432921822196988,
          "pitch": 0.02439329078637975,
          "rotation": 0,
          "target": "4-zimmer-1"
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
          "yaw": 0.6931704783890886,
          "pitch": 0.11167916051819304,
          "rotation": 0,
          "target": "2-zimmer-2"
        },
        {
          "yaw": -0.14182299469729465,
          "pitch": 0.23255965475932783,
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
          "yaw": -0.5776601228728495,
          "pitch": 0.102645008170132,
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
          "yaw": 3.1270873175686145,
          "pitch": 0.45914018418417335,
          "rotation": 0,
          "target": "0-kche"
        },
        {
          "yaw": 2.9464086598391255,
          "pitch": 0.063140179647732,
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
          "yaw": -2.717173541120747,
          "pitch": 0.5665305346759695,
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
          "yaw": -2.1565407690774983,
          "pitch": 0.46795939180138646,
          "rotation": 0,
          "target": "3-wc"
        },
        {
          "yaw": -2.8822588394068074,
          "pitch": 0.509806081930325,
          "rotation": 0,
          "target": "0-kche"
        },
        {
          "yaw": -3.0393604256100026,
          "pitch": 0.257776907836643,
          "rotation": 0,
          "target": "1-essen"
        },
        {
          "yaw": 1.7534247978375515,
          "pitch": 0.05976254713281115,
          "rotation": 0,
          "target": "4-zimmer-1"
        },
        {
          "yaw": 0.005150923843059374,
          "pitch": 0.00895752457059018,
          "rotation": 0,
          "target": "6-wintergarten"
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
          "yaw": 3.073213329228092,
          "pitch": 0.4951832122087083,
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
