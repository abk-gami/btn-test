import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'
import React, { useRef, useState } from 'react'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const {height, width} = Dimensions.get('screen')

export default function Ye() {
    const ref = useRef()

    const [animate, setAnimate] = useState('Ship Order')

    const change = () => {
      setAnimate( setAnimate('animate')?  ' Order' :'Invoice Delivery')
        ref.current.play()
        // wait(4200).then(() => setAnimate('Order shipped'));
    }

    return (
        <View style={styles.container}>
          <View 
           style={{  justifyContent: 'center',   }}
         >

          <TouchableOpacity style={styles.btn}
        //   onPress={() => ref.current.play()}
        onPress={change}
          >
            <Text> {animate}</Text>
          <LottieView style={{flex: 1, backgroundColor: '#ffffff',  }} ref={ref} source={json} loop={false} />

          </TouchableOpacity>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%'
    },

    btn:{
        height: height * 0.08,
        width: width * 0.7,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
        overflow: 'hidden'
    }
})

const json = 
{"nm":"loading_truck","ddd":0,"h":120,"w":200,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":3,"nm":"truck","sr":1,"st":0,"op":23,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[48,47,0],"ix":1},"s":{"a":0,"k":[151,103,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[117,63,0],"t":17,"ti":[-7.118,0,0],"to":[7.094,0,0]},{"s":[307,63,0],"t":23}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":11}},"ef":[],"ind":1},{"ty":4,"nm":"box3 outline","sr":1,"st":0,"op":23,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[44.1,31.188,0],"ix":1},"s":{"a":0,"k":[66.225,97.087,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[34.741,30.348,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":1,"y":-0.006},"i":{"x":0,"y":0.993},"s":[0],"t":12.333},{"s":[100],"t":13}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[41.979,29.066],[-41.979,29.066],[-41.979,-29.066],[41.979,-29.066]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[44.1,31.188],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2,"parent":1},{"ty":4,"nm":"box2 outline","sr":1,"st":0,"op":23,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[29.892,14.965,0],"ix":1},"s":{"a":0,"k":[66.225,97.087,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[25.332,46.099,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.915,"y":0.002},"i":{"x":0,"y":1.003},"s":[0],"t":7.333},{"s":[100],"t":8}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.771,12.844],[-27.771,12.844],[-27.771,-12.844],[27.771,-12.844]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[29.892,14.965],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3,"parent":1},{"ty":4,"nm":"box1 outline","sr":1,"st":0,"op":23,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[16.329,31.188,0],"ix":1},"s":{"a":0,"k":[66.225,97.087,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[53.132,30.348,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":1,"y":0.003},"i":{"x":0,"y":0.997},"s":[0],"t":2.333},{"s":[100],"t":3}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[14.208,29.066],[-14.208,29.066],[-14.208,-29.066],[14.208,-29.066]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[16.329,31.188],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4,"parent":1},{"ty":4,"nm":"emty trucvk line","sr":1,"st":0,"op":23,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[77.25,50.423,0],"ix":1},"s":{"a":0,"k":[66.225,97.087,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[53.132,57.269,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.098,0],[0,0],[0,1.031],[0,0],[-0.985,0],[0,0],[-0.138,-0.905],[0,0]],"o":[[0,0],[-0.985,0],[0,0],[0,-1.031],[0,0],[0.876,0],[0,0],[0.173,1.134]],"v":[[12.706,12.844],[-12.857,12.844],[-14.641,10.977],[-14.641,-10.977],[-12.857,-12.844],[9.343,-12.844],[11.104,-11.273],[14.467,10.682]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[113.848,27.103],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0.117],[-0.007,0.196],[-8.393,0],[-0.298,-8.708],[0,-0.198],[0.003,-0.117],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.003,-0.117],[0,-0.198],[0.297,-8.708],[8.393,0],[0.006,0.196],[0,0.117],[0,0],[0,0],[0,0]],"v":[[-41.979,-12.844],[-41.979,12.844],[-34.6,12.844],[-34.617,12.497],[-34.588,11.91],[-19.078,-3.768],[-3.567,11.91],[-3.539,12.497],[-3.556,12.844],[41.979,12.844],[41.979,-12.844]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[49.479,64.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[4.544,0],[0,-4.756],[-0.004,-0.115]],"o":[[0.005,-0.115],[0,-4.756],[-4.544,0],[0,0.118],[0,0]],"v":[[8.21,4.479],[8.228,4.132],[-0.001,-4.479],[-8.228,4.132],[-8.212,4.479]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.383,72.945],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 4","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[-4.544,0],[0,-4.756],[0.005,-0.115]],"o":[[-0.004,-0.115],[0,-4.756],[4.544,0],[0,0.118],[0,0]],"v":[[-8.21,4.479],[-8.228,4.132],[0.001,-4.479],[8.228,4.132],[8.211,4.479]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.382,72.945],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 5","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[8.585,0],[0,-8.985],[-0.003,-0.116]],"o":[[0.002,-0.116],[0,-8.985],[-8.585,0],[0,0.118],[0,0]],"v":[[15.527,8.308],[15.544,7.961],[0,-8.307],[-15.544,7.961],[-15.528,8.308]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.383,69.116],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 6","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.791,0.868],[0,0],[0.197,0.737],[0,0],[2.001,0],[0,0],[0,0],[0,0],[0,0.117],[-8.617,0],[0,-8.99],[0.002,-0.117],[0,0],[0,0]],"o":[[0,0],[-0.505,-0.554],[0,0],[-0.537,-2.017],[0,0],[0,0],[0,0],[-0.003,-0.117],[0,-8.99],[8.617,0],[0,0.117],[0,0],[0,0],[0,-1.2]],"v":[[26.539,7.759],[20.215,0.819],[19.146,-1.148],[10.993,-31.738],[6.699,-35.15],[-27.771,-35.15],[-27.771,35.15],[-10.642,35.15],[-10.659,34.803],[4.944,18.525],[20.547,34.803],[20.53,35.15],[27.771,35.15],[27.771,10.98]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[119.229,42.65],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 7","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-4.432,0],[-0.175,4.594]],"o":[[0.176,4.594],[4.432,0],[0,0]],"v":[[-8.21,-4.133],[0.001,4.133],[8.21,-4.133]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.382,81.556],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 8","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-8.472,0],[-0.178,8.824]],"o":[[0.178,8.824],[8.473,0],[0,0]],"v":[[-15.527,-7.962],[-0.001,7.962],[15.527,-7.962]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.383,85.385],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 9","ix":9,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[4.432,0],[0.176,4.594]],"o":[[-0.175,4.594],[-4.432,0],[0,0]],"v":[[8.211,-4.133],[0.001,4.133],[-8.211,-4.133]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.382,81.556],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 10","ix":10,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[0.013,0.196]],"o":[[0.004,-0.115],[0,-0.198],[0,0]],"v":[[-0.003,0.467],[0.014,0.12],[-0.014,-0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[38.638,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 11","ix":11,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,-0.198],[-0.005,-0.116]],"o":[[-0.012,0.195],[0,0.117],[0,0]],"v":[[0.014,-0.467],[-0.014,0.12],[0.003,0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[22.212,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 12","ix":12,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[4.355,0],[0.29,-4.48]],"o":[[-0.29,-4.48],[-4.354,0],[0,0]],"v":[[8.199,4.012],[0,-4.012],[-8.199,4.012]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.424,72.479],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 13","ix":13,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-4.432,0],[-0.175,4.594]],"o":[[0.175,4.594],[4.432,0],[0,0]],"v":[[-8.21,-4.133],[-0.001,4.133],[8.21,-4.133]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.425,81.556],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 14","ix":14,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,-0.198],[-0.003,-0.117]],"o":[[-0.006,0.197],[0,0.117],[0,0]],"v":[[0.014,-0.467],[-0.014,0.12],[0.003,0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[14.895,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 15","ix":15,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[-0.012,0.196]],"o":[[-0.004,-0.115],[0,-0.198],[0,0]],"v":[[0.003,0.467],[-0.014,0.12],[0.014,-0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[22.211,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 16","ix":16,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,-0.198],[0.004,-0.116]],"o":[[0.013,0.195],[0,0.117],[0,0]],"v":[[-0.014,-0.467],[0.014,0.12],[-0.002,0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[38.637,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 17","ix":17,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0.118],[0.007,0.198]],"o":[[0.002,-0.116],[0,-0.198],[0,0]],"v":[[-0.003,0.467],[0.014,0.12],[-0.014,-0.467]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[45.955,76.957],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 18","ix":18,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-8.473,0],[-0.179,8.824]],"o":[[0.178,8.824],[8.473,0],[0,0]],"v":[[-15.527,-7.962],[-0.001,7.962],[15.527,-7.962]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.425,85.385],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 19","ix":19,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[4.431,0],[0.175,4.594]],"o":[[-0.175,4.594],[-4.433,0],[0,0]],"v":[[8.211,-4.133],[0.001,4.133],[-8.211,-4.133]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.425,81.556],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 20","ix":20,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-4.354,0],[-0.29,-4.48]],"o":[[0.29,-4.48],[4.355,0],[0,0]],"v":[[-8.199,4.012],[0,-4.012],[8.199,4.012]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.425,72.479],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 21","ix":21,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[8.396,0],[0.298,-8.711]],"o":[[-0.297,-8.711],[-8.395,0],[0,0]],"v":[[15.516,7.841],[0,-7.841],[-15.516,7.841]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[30.424,68.649],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5,"parent":1},{"ty":4,"nm":"man outlin_truck","sr":1,"st":16,"op":23,"ip":16,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.593,41.213,0],"ix":1},"s":{"a":0,"k":[66.225,97.087,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-14.305,58.129,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":1,"it":[{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[13.594,58.215],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[-4.996,0],[0,0],[0,-4.997]],"o":[[0,0],[0,0],[0,-4.997],[0,0],[4.996,0],[0,0]],"v":[[13.344,16.962],[-13.344,16.962],[-13.344,-7.915],[-4.298,-16.962],[4.298,-16.962],[13.344,-7.915]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[74.225,27.38],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[148.788,25.241],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-4.416],[4.416,0],[0,4.416],[-4.416,0]],"o":[[0,4.416],[-4.416,0],[0,-4.416],[4.416,0]],"v":[[7.996,0],[0,7.996],[-7.996,0],[0,-7.996]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[77.969,77.969],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[148.333,12.436],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6,"parent":1},{"ty":4,"nm":"arm outline","sr":1,"st":0,"op":15,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[7.974,9.804,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[17.752,65.107,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.826,1.541],[1.177,1.2],[0,0],[0,0],[0,0]],"o":[[0.826,-1.541],[0,0],[0,0],[0,0],[1.308,0.702]],"v":[[6.898,7.33],[6.025,2.818],[-6.367,-9.553],[-7.725,-0.958],[3.033,8.852]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[7.974,9.804],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":4,"nm":"box outline","sr":1,"st":0,"op":15,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[15.408,13.372,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[29.799,69.314,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.547,"y":0.006},"i":{"x":0.138,"y":0.998},"s":[0],"t":0},{"o":{"x":0.255,"y":-60996.807},"i":{"x":0.721,"y":-26792.628},"s":[100],"t":1},{"o":{"x":1,"y":0.001},"i":{"x":0,"y":1.004},"s":[100],"t":2},{"o":{"x":0.281,"y":0.198},"i":{"x":0.696,"y":1.709},"s":[0],"t":3},{"o":{"x":1,"y":-0.005},"i":{"x":0,"y":0.998},"s":[0],"t":4.667},{"o":{"x":0.274,"y":0.288},"i":{"x":0.745,"y":1.464},"s":[100],"t":5},{"o":{"x":1,"y":0.006},"i":{"x":0,"y":1.001},"s":[100],"t":7},{"o":{"x":0.235,"y":0.049},"i":{"x":0.667,"y":1},"s":[0],"t":7.667},{"o":{"x":1,"y":0.001},"i":{"x":0,"y":1.001},"s":[0],"t":9.667},{"o":{"x":0.333,"y":0},"i":{"x":0.79,"y":1.393},"s":[100],"t":10},{"o":{"x":1,"y":0.005},"i":{"x":0,"y":0.995},"s":[100],"t":12.333},{"s":[0],"t":13}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[14.701,12.665],[-14.701,12.665],[-14.701,-12.665],[14.701,-12.665]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Ã¬ÂÂ  1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[15.408,13.372],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8},{"ty":4,"nm":"man outline 3","sr":1,"st":0,"op":15,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.593,41.213,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[22.919,74.463,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.428,-1.022],[0.856,1.229],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.864,-0.423],[0,2.589],[0,0],[0,0],[0,0],[-1.864,-0.423],[0,2.589],[0,0],[0,0],[0,0],[0,0]],"o":[[0.856,1.229],[-1.428,1.022],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1.912],[2.658,0.603],[0,0],[0,0],[0,0],[0,1.912],[2.658,0.603],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.525,-17.536],[0.49,-13.46],[-3.648,-13.835],[-9.988,-23.96],[-11.579,-23.96],[-10.63,-6.318],[-9.273,-6.318],[-9.273,19.279],[-6.143,23.357],[-1.132,19.34],[-1.132,-6.318],[0.678,-6.318],[0.678,19.279],[3.807,23.357],[8.82,19.34],[8.82,-6.318],[10.63,-6.318],[11.579,-23.96],[-2.947,-23.96]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[13.594,58.215],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[-4.996,0],[0,0],[0,-4.997]],"o":[[0,0],[0,0],[0,-4.997],[0,0],[4.996,0],[0,0]],"v":[[13.344,16.962],[-13.344,16.962],[-13.344,-7.915],[-4.298,-16.962],[4.298,-16.962],[13.344,-7.915]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[13.594,34.934],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"ÃªÂ·Â¸Ã«Â£Â¹ 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Ã­ÂÂ¨Ã¬ÂÂ¤ 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-4.416],[4.416,0],[0,4.416],[-4.416,0]],"o":[[0,4.416],[-4.416,0],[0,-4.416],[4.416,0]],"v":[[7.996,0],[0,7.996],[-7.996,0],[0,-7.996]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Ã¬Â¹Â  1","c":{"a":0,"k":[0.0824,0.1098,0.1098],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[13.593,8.246],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":9}],"v":"5.5.10","fr":5,"op":23,"ip":0,"assets":[]}