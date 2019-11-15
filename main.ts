enum btnList{
    //% block="M-LEFT"
    cleft = 8,
    //% block="M-RIGHT"
    cright = 16,
    //% block="R-TOP"
    rup = 12,
    //% block="R-BOTTOM"
    rdown = 14,
    //% block="R-LEFT"
    rleft = 13,
    //% block="R-RIGHT"
    rright = 15
}
enum eventList {
    //% block="PRESSED"
    pressed = 1,
    //% block="RELEASED"
    released = 0
}
enum ToneHzTable {
    do = 262,
    re = 294,
    mi = 330,
    fa = 349,
    sol = 392,
    la = 440,
    si = 494
}
enum BeatList {
    //% block="1"
    whole_beat = 10,
    //% block="1/2"
    half_beat = 11,
    //% block="1/4"
    quarter_beat = 12,
    //% block="1/8"
    eighth_beat = 13,
    //% block="2"
    double_beat = 14,
    //% block="4"
    breve_beat = 15
}
enum Patrol{
    //% block="□□"
    white_white = 1,
    //% block="□■"
    white_black = 2,
    //% block="■□"
    black_white = 3,
    //% block="■■"
    black_black = 4
}
enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="μs"
    MicroSeconds
}
enum IRList {
    //% block="FRONT"
    front = 1,
    //% block="LEFT"
    right = 2,
    //% block="RIGHT"
    left = 3
}
enum RgbList {
    //% block="ALL"
    rgb = 9,
    //% block="LED1"
    rgb1 = 0,
    //% block="LED2"
    rgb2 = 1,
    //% block="LED3"
    rgb3 = 2,
    //% block="LED4"
    rgb4 = 3,
    //% block="LED5"
    rgb5 = 4,
    //% block="LED6"
    rgb6 = 5,
    //% block="LED7"
    rgb7 = 6,
    //% block="LED8"
    rgb8 = 7,
    //% block="LED9"
    rgb9 = 8
}
enum ColorList {
    //% block="RED"
    red = 1,
    //% block="ORANGE"
    orange = 2,
    //% block="YELLOW"
    yellow = 3,
    //% block="GREEN"
    green = 4,
    //% block="BLUE"
    blue = 5,
    //% block="INDIGO"
    indigo = 6,
    //% block="VIOLET"
    violet = 7,
    //% block="PURPLE"
    purple = 8,
    //% block="WHITE"
    white = 9,
    //% block="BLOCK"
    black = 1
}
enum PinList {
    //% block="UP"
    up_pull = 1,
    //% block="DOWN"
    down_pull = 2,
    //% block="NONE"
    no_pull = 3
}
enum SENSORS {
    //% block="Cruise00"
    MU00,
    //% block="Cruise01"
    MU01,
    //% block="Cruise10"
    MU10,
    //% block="Cruise11"
    MU11
}
enum PORT {
    //% blockId=Port_I2C block="I2C"
    I2C = 1,
    //% blockId=Port_Serial block="Serial"
    Serial = 0,
}
enum VISION_TYPE {
    //% block="Color Detect"
    VISION_COLOR_DETECT = 1,
    //% block="Color Recognize"
    VISION_COLOR_RECOGNITION = 2,
    //% block="Ball Detect"
    VISION_BALL_DETECT = 3,
    //% block="Body Detect"
    VISION_BODY_DETECT = 5,
    //% block="Shape Card"
    VISION_SHAPE_CARD_DETECT = 6,
    //% block="Traffic Card"
    VISION_TRAFFIC_CARD_DETECT = 7,
    //% block="Number Card"
    VISION_NUM_CARD_DETECT = 8
}
enum _VISION_TYPE {
    //% block="olor Detect"
    VISION_COLOR_DETECT = 1,
    //% block="Ball Detect"
    VISION_BALL_DETECT = 3,
    //% block="Body Detect"
    VISION_BODY_DETECT = 5,
    //% block="Shape Card"
    VISION_SHAPE_CARD_DETECT = 6,
    //% block="Traffic Card"
    VISION_TRAFFIC_CARD_DETECT = 7,
    //% block="Number Card"
    VISION_NUM_CARD_DETECT = 8
}
enum CARD_TYPE {
    //% block="Shape Card"
    VISION_SHAPE_CARD_DETECT = 6,
    //% block="Traffic Card"
    VISION_TRAFFIC_CARD_DETECT,
    //% block="Number Card"
    VISION_NUM_CARD_DETECT
}
enum TRAFFIC_CARD_TYPE {
    //% block="Forward"
    TRAFFIC_CARD_FORWARD = 1,
    //% block="Left"
    TRAFFIC_CARD_LEFT,
    //% block="Right"
    TRAFFIC_CARD_RIGHT,
    //% block="Turn Around"
    TRAFFIC_CARD_TURN_AROUND,
    //% block="Stop"
    TRAFFIC_CARD_PARK
}
enum SHAPE_CARD_TYPE {
    //% block="tick"
    SHAPE_CARD_TICK = 1,
    //% block="cross"
    SHAPE_CARD_CROSS,
    //% block="circle"
    SHAPE_CARD_CIRCLE,
    //% block="square"
    SHAPE_CARD_SQUARE,
    //% block="triangle"
    SHAPE_CARD_TRIANGLE
}
enum LED_COLOR_TYPE {
    //% block="off"
    LED_BLACK = 0,
    //% block="red"
    LED_RED,
    //% block="green"
    LED_GREEN,
    //% block="blue"
    LED_BLUE,
    //% block="yellow"
    LED_YELLOW,
    //% block="purple"
    LED_PURPLE,
    //% block="cayan"
    LED_CYAN,
    //% block="white"
    LED_WHITE
}
enum COLOR_TYPE {
    //% block="black"
    BLACK = 1,
    //% block="white"
    WHITE,
    //% block="red"
    RED,
    //% block="yellow"
    YELLOW,
    //% block="green"
    GREEN,
    //% block="cayan"
    CYAN,
    //% block="blue"
    BLUE,
    //% block="purple"
    PURPLE,
    //% block="others"
    UNKOWN = 0
}
enum NUM_CARD_TYPE {
    //% block="1"
    NUM_CARD_1 = 1,
    //% block="2"
    NUM_CARD_2,
    //% block="3"
    NUM_CARD_3,
    //% block="4"
    NUM_CARD_4,
    //% block="5"
    NUM_CARD_5,
    //% block="6"
    NUM_CARD_6,
    //% block="7"
    NUM_CARD_7,
    //% block="8"
    NUM_CARD_8,
    //% block="9"
    NUM_CARD_9,
    //% block="0"
    NUM_CARD_0,
}
enum VisionLevel {
    //% block="Auto"
    LEVEL_AUTO = 0,
    //% block="Speed"
    LEVEL_HIGH_SPEED,
    //% block="Balance"
    LEVEL_NORMAL,
    //% block="Accuracy"
    LEVEL_HIGH_ACCURACY
}
enum VisionZoom {
    //% block="Auto"
    Default,
    //% block="Level1"
    LEVEL_1,
    //% block="Level2"
    LEVEL_2,
    //% block="Level3"
    LEVEL_3,
    //% block="Level4"
    LEVEL_4,
    //% block="Level5"
    LEVEL_5
}
enum BaudRate2 {
    //% block="9600"
    BR_9600 = 0,
    //% block="19200"
    BR_19200,
    //% block="38400"
    BR_38400,
    //% block="57600"
    BR_57600,
    //% block="115200"
    BR_115200,
    //% block="230400"
    BR_230400,
    //% block="460800"
    BR_460800,
    //% block="921600"
    BR_921600
}
enum WBMODE {
    //% block="Auto"
    WB_AUTO,
    //% block="Lock"
    WB_LOCK,
    //% block="white"
    WB_WHITE,
    //% block="yellow"
    WB_WARM
}
enum Params {
    //% block="x position"
    X_POS = 1,
    //% block="y position"
    Y_POS,
    //% block="width"
    WIDTH,
    //% block="height"
    HEIGHT,
    //% block="label"
    LABLE
}
enum ColorParams {
    //% block="red channel"
    Red_channal = 1,
    //% block="grenn channel"
    Green_channal,
    //% block="blue channel"
    Blue_channal,
    //% block="label"
    LABLE
}
enum DIR {
    //%blockId=DIR_X block="X"
    X = 0,
    //%blockId=DIR_Y block="Y"
    Y
}
enum LEDS {
    //% block="1"
    LED1 = 0,
    //% block="2"
    LED2
}
enum ENABLES {
    //% block="Enable"
    enable = 1,
    //% block="Disable"
    disable = 0
}
// % weight=99 icon="\uf0e7" color=#1B80C4
namespace CruiseBit {

    let neoStrip = neopixel.create(DigitalPin.P1, 9, NeoPixelMode.RGB);

    /**
     * 设置电机
     */
	//% blockId="cruise_motor" block="Set DC Motor Left Speed%leftSpeed| Right Speed%rightSpeed| for%time"


    //% leftSpeed.min=-1023 leftSpeed.max=1023
    //% rightSpeed.min=-1023 rightSpeed.max=1023
    //% weight=100
    export function motorRun(leftSpeed: number, rightSpeed: number, time: number): void {
        let leftRotation = 1;
        if(leftSpeed < 0){
            leftRotation = 0;
        }

        let rightRotation = 1;
        if(rightSpeed < 0){
            rightRotation = 0;
        }
        
       //左电机 M1
        pins.analogWritePin(AnalogPin.P14, Math.abs(leftSpeed));
        pins.digitalWritePin(DigitalPin.P13, leftRotation);

        //右电机 M2
        pins.analogWritePin(AnalogPin.P16, Math.abs(rightSpeed));
        pins.digitalWritePin(DigitalPin.P15, rightRotation);

        //添加时间控制
        if(time < 0){
            time = 0;
        }
        
        let time_num = time*1000000;

        control.waitMicros(time_num);

        //左电机 M1
        pins.analogWritePin(AnalogPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        //右电机 M2
        pins.analogWritePin(AnalogPin.P16, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        
        
    }

    /**
     * 播放音调
     */
    //% weight=89
    //% blockId="cruise_tone" block="Play Tone %tone| for %beatInfo"
    export function myPlayTone(tone:ToneHzTable, beatInfo:BeatList): void {

        if(beatInfo == BeatList.whole_beat){
            music.playTone(tone, music.beat(BeatFraction.Whole));

        }
       
        if(beatInfo == BeatList.half_beat){
            music.playTone(tone, music.beat(BeatFraction.Half));

        }
        
        if(beatInfo == BeatList.quarter_beat){
            music.playTone(tone, music.beat(BeatFraction.Quarter));

        }

        if(beatInfo == BeatList.double_beat){
            music.playTone(tone, music.beat(BeatFraction.Double));

        }

        
        if(beatInfo == BeatList.eighth_beat){
            music.playTone(tone, music.beat(BeatFraction.Eighth));

        }

        if(beatInfo == BeatList.breve_beat){
            music.playTone(tone, music.beat(BeatFraction.Breve));

        }
        //1、16不行
        // if(beatInfo == BeatList.sixteen_beat){
        //     music.playTone(tone, music.beat(BeatFraction.SixTeenth));

        // }    
    }
	
	/**
     * 摇杆横轴
     */
    //% blockId="joy_x" block="Joystick X value"
    //% weight=77
    export function rockerX(): number {
        return pins.analogReadPin(AnalogPin.P2);
    }
    /**
     * 摇杆纵轴
     */
    //% blockId="joy_y" block="Joystick Y value"
    //% weight=78
    export function rockerY(): number {
        return pins.analogReadPin(AnalogPin.P1); 
    }
    //% weight=76
    //% blockId="btn_pressed" block="Button %btn|  %btnEvent"
    export function btnPressed(btn:btnList, btnEvent:eventList): boolean {
        if(btn == btnList.cleft){
            return pins.digitalReadPin(DigitalPin.P8) == btnEvent;
        }else if(btn == btnList.cright){
            return pins.digitalReadPin(DigitalPin.P16) == btnEvent;
        }else if(btn == btnList.rup){
            return pins.digitalReadPin(DigitalPin.P12) == btnEvent;
        }else if(btn == btnList.rdown){
            return pins.digitalReadPin(DigitalPin.P14) == btnEvent;
        }else if(btn == btnList.rleft){
            return pins.digitalReadPin(DigitalPin.P13) == btnEvent;
        }else{
            return pins.digitalReadPin(DigitalPin.P15) == btnEvent;
        }
        
    }

    //% weight=79
    //% blockId="cruise_patrol" block="Line Tracer Detects %patrol"
    export function readPatrol(patrol:Patrol): boolean {

        // let p1 = pins.digitalReadPin(DigitalPin.P12);
        // let p2 = pins.digitalReadPin(DigitalPin.P11);

        if(patrol == Patrol.white_white){
            if(pins.digitalReadPin(DigitalPin.P12) == 1 && pins.digitalReadPin(DigitalPin.P11) == 1){
                return true;
            }else{
                return false;
            }
        }else if(patrol == Patrol.white_black){
            if(pins.digitalReadPin(DigitalPin.P12) == 1 && pins.digitalReadPin(DigitalPin.P11) == 0){
                return true;
            }else{
                return false;
            }
        }else if(patrol == Patrol.black_white){
            if(pins.digitalReadPin(DigitalPin.P12) == 0 && pins.digitalReadPin(DigitalPin.P11) == 1){
                return true;
            }else{
                return false;
            }
        }else if(patrol == Patrol.black_black){
            if(pins.digitalReadPin(DigitalPin.P12) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    //% blockId=cruise_sensor block="Ultrasonic Distance %unit"
    //% weight=69
    export function sensorDistance(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        //pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P2, PinPullMode.PullUp);
        //pins.setPull(DigitalPin.P5, PinPullMode.PullUp);

        //pins.digitalWritePin(DigitalPin.P2, 0);
        //control.waitMicros(4);
        //pins.digitalWritePin(DigitalPin.P2, 1);
        //control.waitMicros(10);
        //pins.digitalWritePin(DigitalPin.P2, 0);
        
        // read pulse
        //let d = pins.pulseIn(DigitalPin.P5, PulseValue.High, maxCmDistance * 58);
        //console.log("Distance: " + d/58);
        
        //basic.pause(50)

        //switch (unit) {
            //case PingUnit.Centimeters: return d / 58;
            //default: return d ;
        //}

         // send pulse
         pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
         pins.digitalWritePin(DigitalPin.P2, 0);
         control.waitMicros(2);
         pins.digitalWritePin(DigitalPin.P2, 1);
         control.waitMicros(10);
         pins.digitalWritePin(DigitalPin.P2, 0);
 
         // read pulse
         const d = pins.pulseIn(DigitalPin.P2, PulseValue.High, maxCmDistance * 58);
 
         switch (unit) {
             case PingUnit.Centimeters: return Math.idiv(d, 58);
             default: return d ;
 }
    }


    /**
      * 红外线探测左、前、右是否有障碍物
      */
    //% blockId="cruise_IR" block="%IRDire| Obstacle"
    //% weight=68
    export function cruiseIR(IRDire:IRList): boolean {
        if(IRDire == IRList.front){
            if(pins.digitalReadPin(DigitalPin.P5) == 0){
                return true;
            }else{
                return false;
            }
        }else if(IRDire == IRList.left){
            if(pins.digitalReadPin(DigitalPin.P8) == 0){
                return true;
            }else{
                return false;
            }
        }else if(IRDire == IRList.right){
            if(pins.digitalReadPin(DigitalPin.P2) == 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    //% blockId=cruise_rgb block="Set LED %RgbValue| Colour %ColorValue"
    //% weight=59
    export function setRGB(RgbValue: RgbList, ColorValue:ColorList): void {
        
        if(ColorValue == ColorList.red){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Red));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Red));
            }
            
        }
        
        if(ColorValue == ColorList.orange){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Orange));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Orange));
            }
        }
        
        if(ColorValue == ColorList.yellow){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Yellow));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Yellow));
            }
        }
        
        if(ColorValue == ColorList.green){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Green));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Green));
            }
        }
        
        if(ColorValue == ColorList.blue){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Blue));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Blue));
            }
        }
        
        if(ColorValue == ColorList.indigo){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Indigo));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Indigo));
            }
        }
        
        if(ColorValue == ColorList.violet){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Violet));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Violet));
            }
        }
        
        if(ColorValue == ColorList.purple){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Purple));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Purple));
            }
        }
        
        if(ColorValue == ColorList.white){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.White));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.White));
            }
        }
        
        if(ColorValue == ColorList.black){
            if(RgbValue == RgbList.rgb){
                neoStrip.showColor(neopixel.colors(NeoPixelColors.Black));
            }else{
                neoStrip.setPixelColor(RgbValue, neopixel.colors(NeoPixelColors.Black));
            }
        }

        neoStrip.show();
        
    }

   /**
     * Clear leds.
     */
   //% blockId="cruise_neo_clear" block="Clear all"
   //% weight=55
   export function neoClear(): void {
       neoStrip.showColor(neopixel.colors(NeoPixelColors.Black));
   }

    /**
      * Shows a rainbow pattern on all LEDs.
      */
    //% blockId="cruise_neo_rainbow" block="Show Rainbow"
    //% weight=70
    export function neoRainbow(): void {
        neoStrip.showRainbow(1, 360);
    }

     //% blockId=tape_rgb block="Set Pull Pin %pin| to %way"
    //% weight=49
    export function setTapeLights(pin: DigitalPin, way: PinList): void {

        if(way = PinList.up_pull){
            pins.setPull(pin, PinPullMode.PullUp);
        }else if(way = PinList.down_pull){
            pins.setPull(pin, PinPullMode.PullDown);
        }else{
            pins.setPull(pin, PinPullMode.PullNone);
        }        
    }
    /**
    * Help goes here.
    */
    //% blockId=mu_init block="Init%id|Interface%port"
    //% weight=100 
    //% shim=muvs::begin
    //% group="Settings"
    export function begin(id: SENSORS, port: PORT) {
        return
    }
    //% blockId=MU_reset block="%id|Reset to Default"
    //% weight=99
    //% shim=muvs::reset
    //% group="Settings"
    export function reset(id: SENSORS) {
        return
    }

    //% blockId=MU_set_led block="%id|LED %led|when detect %detected_color|when undetect %undetected_color"
    //% level.defl=1 level.min=0 level.max=15
    //% weight=98 inlineInputMode=inline
    //% shim=muvs::set_led
    //% group="Settings" advanced=true
    export function set_led(id: SENSORS, led: LEDS, detected_color: LED_COLOR_TYPE, undetected_color: LED_COLOR_TYPE) {
        return
    }

    //% blockId=MU_VisionBegin block="%id|%enable|Algorithm%type"
    //% weight=97
    //% shim=muvs::VisionBegin
    //% group="Settings"
    export function VisionBegin(id: SENSORS, enable: ENABLES, type: VISION_TYPE) {
        return
    }
    //% blockId=MU_set_level block="%id|Set Algorithm%VISION_TYPE|Level%level"
    //% weight=96
    //% shim=muvs::set_level
    //% group="Settings" advanced=true
    export function set_level(id: SENSORS, type: VISION_TYPE, level: VisionLevel) {
        return
    }
    //% blockId=MU_set_zoom block="%id|Digital Zoom%level"
    //% weight=95
    //% shim=muvs::set_zoom
    //% group="Settings" advanced=true
    export function set_zoom(id: SENSORS, level: VisionZoom) {
        return
    }

    //% blockId=MU_set_baudrate block="%id|Set Baudrate%baudrate"
    //% weight=94
    //% shim=muvs::set_baudrate
    //% group="Settings" advanced=true
    export function set_baudrate(id: SENSORS, baud: BaudRate2) {
        return
    }
    //% blockId=MU_set_awb block="%id|Set white balance%level"
    //% weight=93
    //% shim=muvs::set_WB
    //% group="Settings" advanced=true
    export function set_WB(id: SENSORS, awb: WBMODE) {
        return
    }
    //% block="%id|High FPS mode$on"
    //% shim=muvs::onOff
    //% on.shadow="toggleOnOff" group="Settings" advanced=true
    export function onOff(id: SENSORS, on: boolean) {
        return
    }
    //% block="%id|Is detected%type" color="#2E8B57"
    //% shim=muvs::detected
    //% group="Functions"
    export function detected(id: SENSORS, type: VISION_TYPE): boolean {
        return true
    }
    //% block="%id|Is detected  Color Recognize x=%x|y=%y" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorRCGLabel
    //% group="Functions"
    export function MuVs2GetColorRCGLabel(id: SENSORS, x: number, y: number): boolean {
        return true
    }
    //% block="%id|Is detected  Color Detect Color=%color" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorDetectLabel
    //% group="Functions"
    export function MuVs2GetColorDetectLabel(id: SENSORS, label: COLOR_TYPE): boolean {
        return true
    }
    //% block="Get%id|Algorithm%type|%item" color="#2E8B57"
    //% shim=muvs::get_value
    //% group="Functions"
    export function get_value(id: SENSORS, type: _VISION_TYPE, item: Params): number {
        return 0
    }
    //% block="Get%id| Color Recognize|%item" color="#2E8B57"
    //% shim=muvs::get_color_value
    //% group="Functions"
    export function get_color_value(id: SENSORS, item: ColorParams): number {
        return 0
    }
    //% block="Get%id| Shape Card =%type" color="#2E8B57"
    //% shim=muvs::get_shape_card_type
    //% group="Functions"
    export function get_shape_card_type(id: SENSORS, type: SHAPE_CARD_TYPE): boolean {
        return true
    }
    //% block="Get%id| Traffic Card =%type" color="#2E8B57"
    //% shim=muvs::get_traffic_card_type
    //% group="Functions"
    export function get_traffic_card_type(id: SENSORS, type: TRAFFIC_CARD_TYPE): boolean {
        return true
    }
    //% block="Get%id| Number Card =%type" color="#2E8B57"
    //% shim=muvs::get_number_card_type
    //% group="Functions"
    export function get_number_card_type(id: SENSORS, type: NUM_CARD_TYPE): boolean {
        return true
    }
    //% block="Get%id|Algorithm  Color Recognize color =%color" color="#2E8B57"
    //% shim=muvs::get_color_recognize
    //% group="Functions"
    export function get_color_recognize(id: SENSORS, color: COLOR_TYPE): boolean {
        return true
    }
}
//CruiseBit.begin(SENSORS.MU00, PORT.I2C)
//CruiseBit.VisionBegin(SENSORS.MU00, ENABLES.enable, VISION_TYPE.VISION_NUM_CARD_DETECT)
//basic.forever(function () {
//    if (CruiseBit.detected(SENSORS.MU00, VISION_TYPE.VISION_NUM_CARD_DETECT)) {
//        basic.showIcon(IconNames.Heart)
//    }
//})
//basic.forever(function () {
//    if (CruiseBit.get_number_card_type(SENSORS.MU00, NUM_CARD_TYPE.NUM_CARD_1)) {
//        basic.showIcon(IconNames.Sword)
//    }
//    if (CruiseBit.get_number_card_type(SENSORS.MU00, NUM_CARD_TYPE.NUM_CARD_7)) {
//        basic.showIcon(IconNames.Meh)
//    } else {
//        basic.showIcon(IconNames.Square)
//    }
//})
