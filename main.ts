enum DIR {
    DIR_NONE,
    DIR_LEFT,
    DIR_RIGHT,
    DIR_UP,
    DIR_DOWN,
    DIR_NEAR,
    DIR_FAR,
    DIR_ALL
}
enum STATE {
    NA_STATE,
    NEAR_STATE,
    FAR_STATE,
    ALL_STATE
}

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
    red = -1,
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
    /* Gesture parameters */
    let GESTURE_THRESHOLD_OUT = 30;
    let GESTURE_SENSITIVITY_1 = 33
    let GESTURE_SENSITIVITY_2 = 18

    /* Error code for returned values */
    //ERROR = 0xFF

    /* On/Off definitions */
    let OFF = 0;
    let ON = 1;
    /* Acceptable parameters for setMode */
    let POWER = 0
    let AMBIENT_LIGHT = 1
    let PROXIMITY = 2
    let WAIT = 3
    let AMBIENT_LIGHT_INT = 4
    let PROXIMITY_INT = 5
    let GESTURE = 6
    let ALL = 7

    /* LED Drive values */
    let LED_DRIVE_100MA = 0
    let LED_DRIVE_50MA = 1
    let LED_DRIVE_25MA = 2
    let LED_DRIVE_12_5MA = 3

    /* Proximity Gain (PGAIN) values */
    let PGAIN_1X = 0
    let PGAIN_2X = 1
    let PGAIN_4X = 2
    let PGAIN_8X = 3

    /* ALS Gain (AGAIN) values */
    let AGAIN_1X = 0
    let AGAIN_4X = 1
    let AGAIN_16X = 2
    let AGAIN_64X = 3

    /* Gesture Gain (GGAIN) values */
    let GGAIN_1X = 0
    let GGAIN_2X = 1
    let GGAIN_4X = 2
    let GGAIN_8X = 3

    /* LED Boost values */
    let LED_BOOST_100 = 0
    let LED_BOOST_150 = 1
    let LED_BOOST_200 = 2
    let LED_BOOST_300 = 3

    /* Gesture wait time values */
    let GWTIME_0MS = 0
    let GWTIME_2_8MS = 1
    let GWTIME_5_6MS = 2
    let GWTIME_8_4MS = 3
    let GWTIME_14_0MS = 4
    let GWTIME_22_4MS = 5
    let GWTIME_30_8MS = 6
    let GWTIME_39_2MS = 7

    /* Default values */
    let DEFAULT_ATIME = 219     // 103ms
    let DEFAULT_WTIME = 246     // 27ms
    let DEFAULT_PROX_PPULSE = 0x87    // 16us, 8 pulses
    let DEFAULT_GESTURE_PPULSE = 0x89    // 16us, 10 pulses
    let DEFAULT_POFFSET_UR = 0       // 0 offset
    let DEFAULT_POFFSET_DL = 0       // 0 offset
    let DEFAULT_CONFIG1 = 0x60    // No 12x wait (WTIME) factor
    let DEFAULT_LDRIVE = LED_DRIVE_100MA
    let DEFAULT_PGAIN = PGAIN_4X
    let DEFAULT_AGAIN = AGAIN_4X
    let DEFAULT_PILT = 0       // Low proximity threshold
    let DEFAULT_PIHT = 50      // High proximity threshold
    let DEFAULT_AILT = 0xFFFF  // Force interrupt for calibration
    let DEFAULT_AIHT = 0
    let DEFAULT_PERS = 0x11    // 2 consecutive prox or ALS for int.
    let DEFAULT_CONFIG2 = 0x01    // No saturation interrupts or LED boost
    let DEFAULT_CONFIG3 = 0       // Enable all photodiodes, no SAI
    let DEFAULT_GPENTH = 40      // Threshold for entering gesture mode
    let DEFAULT_GEXTH = 30      // Threshold for exiting gesture mode
    let DEFAULT_GCONF1 = 0x40    // 4 gesture events for int., 1 for exit
    let DEFAULT_GGAIN = GGAIN_4X
    let DEFAULT_GLDRIVE = LED_DRIVE_100MA
    let DEFAULT_GWTIME = GWTIME_2_8MS
    let DEFAULT_GOFFSET = 0       // No offset scaling for gesture mode
    let DEFAULT_GPULSE = 0xC9    // 32us, 10 pulses
    let DEFAULT_GCONF3 = 0       // All photodiodes active during gesture
    let DEFAULT_GIEN = 0       // Disable gesture interrupts
    /* Misc parameters */
    let FIFO_PAUSE_TIME = 30      // Wait period (ms) between FIFO reads

    let neoStrip = neopixel.create(DigitalPin.P1, 9, NeoPixelMode.RGB);

    /* Container for gesture data */
    export class gesture_data_type {
        u_data: Buffer;
        d_data: Buffer;
        l_data: Buffer;
        r_data: Buffer;
        index: number;
        total_gestures: number;
        in_threshold: number;
        out_threshold: number;
    }

    let gesture_data = new gesture_data_type;

    let data_buf: Buffer = pins.createBuffer(128);

    export enum GESTURE_TYPE {
        //% block=None
        None = 0,
        //% block=Right
        Right = 1,
        //% block=Left
        Left = 2,
        //% block=Up
        Up = 3,
        //% block=Down
        Down = 4,
        //% block=Forward
        Forward = 5,
        //% block=Backward
        Backward = 6
    }

    export class APDS9960{
        gesture_ud_delta: number;
        gesture_lr_delta: number;
        gesture_ud_count: number;
        gesture_lr_count: number;
        gesture_near_count: number;
        gesture_far_count: number;
        gesture_state: number;
        gesture_motion: number;
        APDS9960ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);
            buf[0] = addr;
            pins.i2cWriteBuffer(0x39, buf, false);
            buf = pins.i2cReadBuffer(0x39, 1, false);
            return buf[0];
        }
        APDS9960WriteReg(addr: number, cmd: number) {
            let buf2: Buffer = pins.createBuffer(2);
            buf2[0] = addr;
            buf2[1] = cmd;
            pins.i2cWriteBuffer(0x39, buf2, false);
        }
        /**
         * @brief Reads a block (array) of bytes from the I2C device and register
         *
         * @param[in] reg the register to read from
         * @param[out] val pointer to the beginning of the data
         * @param[in] len number of bytes to read
         * @return Number of bytes read. -1 on read error.
         */
        APDS9960ReadRegBlock(addr: number, len: number): number {
            let i: number = 0;
            let y: number = 0;
            for (let j = 0; j < len; j = j + 4) {
                data_buf[j] = this.readi2c(0xFc);
                data_buf[j + 1] = this.readi2c(0xFd);
                data_buf[j + 2] = this.readi2c(0xFe);
                data_buf[j + 3] = this.readi2c(0xFf);
                basic.pause(10);
            }
            return len;
        }
        getMode(): number {
            let enable_value: number;
            /* Read current ENABLE register */
            enable_value = this.APDS9960ReadReg(0x80);
            return enable_value;
        }
        setMode(mode: number, enable: number) {
            let reg_val: number;
            /* Read current ENABLE register */
            reg_val = this.getMode();
            /* Change bit(s) in ENABLE register */
            enable = enable & 0x01;
            if (mode >= 0 && mode <= 6) {
                if (enable) {
                    reg_val |= (1 << mode);
                } else {
                    //reg_val &= ~(1 << mode);
                    reg_val = 0x00;
                }
            } else if (mode == ALL) {
                if (enable) {
                    reg_val = 0x7F;
                } else {
                    reg_val = 0x00;
                }
            }
            /* Write value back to ENABLE register */
            this.APDS9960WriteReg(0x80, reg_val);
        }
        /**
         * @brief Sets the gain of the photodiode during gesture mode
         *
         * Value    Gain
         *   0       1x
         *   1       2x
         *   2       4x
         *   3       8x
         *
         * @param[in] gain the value for the photodiode gain
         * @return True if operation successful. False otherwise.
         */
        setGestureGain(gain: number) {
            let val: number;
            /* Read value from GCONF2 register */
            val = this.APDS9960ReadReg(0xA3);
            /* Set bits in register to given value */
            gain &= 0b00000011;
            gain = gain << 5;
            val &= 0b10011111;
            val |= gain;
            /* Write register value back into GCONF2 register */
            this.APDS9960WriteReg(0xA3, val);
        }
        /**
         * @brief Sets the LED drive current during gesture mode
         *
         * Value    LED Current
         *   0        100 mA
         *   1         50 mA
         *   2         25 mA
         *   3         12.5 mA
         *
         * @param[in] drive the value for the LED drive current
         * @return True if operation successful. False otherwise.
         */
        setGestureLEDDrive(drive: number) {
            let val2: number;
            /* Read value from GCONF2 register */
            val2 = this.APDS9960ReadReg(0xA3);
            /* Set bits in register to given value */
            drive &= 0b00000011;
            drive = drive << 3;
            val2 &= 0b11100111;
            val2 |= drive;
            /* Write register value back into GCONF2 register */
            this.APDS9960WriteReg(0xA3, val2);
        }
        /**
         * @brief Sets the LED current boost value
         *
         * Value  Boost Current
         *   0        100%
         *   1        150%
         *   2        200%
         *   3        300%
         *
         * @param[in] drive the value (0-3) for current boost (100-300%)
         * @return True if operation successful. False otherwise.
         */
        setLEDBoost(boost: number) {
            let val3: number;
            /* Read value from CONFIG2 register */
            val3 = this.APDS9960ReadReg(0x90);
            /* Set bits in register to given value */
            boost &= 0b00000011;
            boost = boost << 4;
            val3 &= 0b11001111;
            val3 |= boost;
            /* Write register value back into CONFIG2 register */
            this.APDS9960WriteReg(0x90, val3);
        }
        /**
         * @brief Sets the time in low power mode between gesture detections
         *
         * Value    Wait time
         *   0          0 ms
         *   1          2.8 ms
         *   2          5.6 ms
         *   3          8.4 ms
         *   4         14.0 ms
         *   5         22.4 ms
         *   6         30.8 ms
         *   7         39.2 ms
         *
         * @param[in] the value for the wait time
         * @return True if operation successful. False otherwise.
         */
        setGestureWaitTime(time: number) {
            let val4: number;
            /* Read value from GCONF2 register */
            val4 = this.APDS9960ReadReg(0xA3);
            /* Set bits in register to given value */
            time &= 0b00000111;
            val4 &= 0b11111000;
            val4 |= time;
            /* Write register value back into GCONF2 register */
            this.APDS9960WriteReg(0xA3, val4);
        }
        /**
         * @brief Turns gesture-related interrupts on or off
         *
         * @param[in] enable 1 to enable interrupts, 0 to turn them off
         * @return True if operation successful. False otherwise.
         */
        setGestureIntEnable(enable: number) {
            let val5: number;
            /* Read value from GCONF4 register */
            val5 = this.APDS9960ReadReg(0xAB);
            /* Set bits in register to given value */
            enable &= 0b00000001;
            enable = enable << 1;
            val5 &= 0b11111101;
            val5 |= enable;
            /* Write register value back into GCONF4 register */
            this.APDS9960WriteReg(0xAB, val5);
        }
        /**
         * @brief Resets all the parameters in the gesture data member
         */
        resetGestureParameters() {
            gesture_data.index = 0;
            gesture_data.total_gestures = 0;
            this.gesture_ud_delta = 0;
            this.gesture_lr_delta = 0;
            this.gesture_ud_count = 0;
            this.gesture_lr_count = 0;
            this.gesture_near_count = 0;
            this.gesture_far_count = 0;
            this.gesture_state = 0;
            this.gesture_motion = DIR.DIR_NONE;
        }
        /**
         * @brief Tells the state machine to either enter or exit gesture state machine
         *
         * @param[in] mode 1 to enter gesture state machine, 0 to exit.
         * @return True if operation successful. False otherwise.
         */
        setGestureMode(mode: number) {
            let val6: number;
            /* Read value from GCONF4 register */
            val6 = this.APDS9960ReadReg(0xAB);
            /* Set bits in register to given value */
            mode &= 0b00000001;
            val6 &= 0b11111110;
            val6 |= mode;
            /* Write register value back into GCONF4 register */
            this.APDS9960WriteReg(0xAB, val6);
        }
        /**
         * Turn the APDS-9960 on
         *
         * @return True if operation successful. False otherwise.
         */
        enablePower() {
            this.setMode(POWER, 1);
        }
        /**
         * @brief Starts the gesture recognition engine on the APDS-9960
         *
         * @param[in] interrupts true to enable hardware external interrupt on gesture
         * @return True if engine enabled correctly. False on error.
         */
        enableGestureSensor(interrupts: boolean) {
            /* Enable gesture mode
            Set ENABLE to 0 (power off)
            Set WTIME to 0xFF
            Set AUX to LED_BOOST_300
            Enable PON, WEN, PEN, GEN in ENABLE
            */
            this.resetGestureParameters();
            this.APDS9960WriteReg(0x83, 0xFF);
            this.APDS9960WriteReg(0x8E, DEFAULT_GESTURE_PPULSE);
            this.setLEDBoost(LED_BOOST_300);
            if (interrupts) {
                this.setGestureIntEnable(1);
            } else {
                this.setGestureIntEnable(0);
            }
            this.setGestureMode(1);
            this.enablePower();
            this.setMode(WAIT, 1)
            this.setMode(PROXIMITY, 1);
            this.setMode(GESTURE, 1);
        }
        pads9960_init() {
            let aa = this.APDS9960ReadReg(0X92);
            if (aa == 0xAB) {
                this.APDS9960WriteReg(0xA0, DEFAULT_GPENTH);//0x28
                this.APDS9960WriteReg(0xA1, DEFAULT_GEXTH);//0x1e
                this.APDS9960WriteReg(0xA2, DEFAULT_GCONF1);//0x40
                this.setGestureGain(DEFAULT_GGAIN);//0x41
                this.setGestureLEDDrive(DEFAULT_GLDRIVE);
                this.setGestureWaitTime(DEFAULT_GWTIME);
                this.APDS9960WriteReg(0xA4, DEFAULT_GOFFSET);
                this.APDS9960WriteReg(0xA5, DEFAULT_GOFFSET);
                this.APDS9960WriteReg(0xA7, DEFAULT_GOFFSET);
                this.APDS9960WriteReg(0xA9, DEFAULT_GOFFSET);
                this.APDS9960WriteReg(0xA6, DEFAULT_GPULSE);//0xc9
                this.APDS9960WriteReg(0xAA, DEFAULT_GCONF3);//00
                this.setGestureIntEnable(DEFAULT_GIEN);
            }
        }
        /**
         * @brief Determines if there is a gesture available for reading
         *
         * @return True if gesture available. False otherwise.
         */
        isGestureAvailable(): boolean {
            let val8: number;
            /* Read value from GSTATUS register */
            val8 = this.APDS9960ReadReg(0xAF);
            /* Shift and mask out GVALID bit */
            val8 &= 0b00000001;
            /* Return true/false based on GVALID bit */
            if (val8 == 1) {
                return true;
            } else {
                return false;
            }
        }
        /**
         * @brief Processes the raw gesture data to determine swipe direction
         *
         * @return True if near or far state seen. False otherwise.
         */
        processGestureData(): boolean {
            let u_first: number = 0;
            let d_first: number = 0;
            let l_first: number = 0;
            let r_first: number = 0;
            let u_last: number = 0;
            let d_last: number = 0;
            let l_last: number = 0;
            let r_last: number = 0;
            let ud_ratio_first: number;
            let lr_ratio_first: number;
            let ud_ratio_last: number;
            let lr_ratio_last: number;
            let ud_delta: number;
            let lr_delta: number;
            let k: number;
            /* If we have less than 4 total gestures, that's not enough */
            if (gesture_data.total_gestures <= 4) {
                return false;
            }
            /* Check to make sure our data isn't out of bounds */
            if ((gesture_data.total_gestures <= 32) && (gesture_data.total_gestures > 0)) {
                /* Find the first value in U/D/L/R above the threshold */
                for (k = 0; k < gesture_data.total_gestures; k++) {
                    if ((gesture_data.u_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.d_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.l_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.r_data[k] > GESTURE_THRESHOLD_OUT)) {
                        u_first = gesture_data.u_data[k];
                        d_first = gesture_data.d_data[k];
                        l_first = gesture_data.l_data[k];
                        r_first = gesture_data.r_data[k];
                        break;
                    }
                }
                /* If one of the _first values is 0, then there is no good data */
                if ((u_first == 0) || (d_first == 0) || (l_first == 0) || (r_first == 0)) {
                    return false;
                }
                /* Find the last value in U/D/L/R above the threshold */
                for (k = gesture_data.total_gestures - 1; k >= 0; k--) {
                    if ((gesture_data.u_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.d_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.l_data[k] > GESTURE_THRESHOLD_OUT) &&
                        (gesture_data.r_data[k] > GESTURE_THRESHOLD_OUT)) {
                        u_last = gesture_data.u_data[k];
                        d_last = gesture_data.d_data[k];
                        l_last = gesture_data.l_data[k];
                        r_last = gesture_data.r_data[k];
                        break;
                    }
                }
            }
            /* Calculate the first vs. last ratio of up/down and left/right */
            ud_ratio_first = ((u_first - d_first) * 100) / (u_first + d_first);
            lr_ratio_first = ((l_first - r_first) * 100) / (l_first + r_first);
            ud_ratio_last = ((u_last - d_last) * 100) / (u_last + d_last);
            lr_ratio_last = ((l_last - r_last) * 100) / (l_last + r_last);
            if (ud_ratio_first == 0 && lr_ratio_first == 0 && ud_ratio_last == 0 && lr_ratio_last == 0) {

                this.pads9960_init();
                this.enableGestureSensor(false);
            }
            /* Determine the difference between the first and last ratios */
            ud_delta = ud_ratio_last - ud_ratio_first;
            lr_delta = lr_ratio_last - lr_ratio_first;
            /* Accumulate the UD and LR delta values */
            this.gesture_ud_delta += ud_delta;
            this.gesture_lr_delta += lr_delta;
            /* Determine U/D gesture */
            if (this.gesture_ud_delta >= GESTURE_SENSITIVITY_1) {
                this.gesture_ud_count = 1;
            } else if (this.gesture_ud_delta <= -GESTURE_SENSITIVITY_1) {
                this.gesture_ud_count = -1;
            } else {
                this.gesture_ud_count = 0;
            }
            /* Determine L/R gesture */
            if (this.gesture_lr_delta >= GESTURE_SENSITIVITY_1) {
                this.gesture_lr_count = 1;
            } else if (this.gesture_lr_delta <= -GESTURE_SENSITIVITY_1) {
                this.gesture_lr_count = -1;
            } else {
                this.gesture_lr_count = 0;
            }
            /* Determine Near/Far gesture */
            if ((this.gesture_ud_count == 0) && (this.gesture_lr_count == 0)) {
                if ((Math.abs(ud_delta) < GESTURE_SENSITIVITY_2) && (Math.abs(lr_delta) < GESTURE_SENSITIVITY_2)) {
                    if ((ud_delta == 0) && (lr_delta == 0)) {
                        this.gesture_near_count++;
                    } else if ((ud_delta != 0) || (lr_delta != 0)) {
                        this.gesture_far_count++;
                    }
                    if ((this.gesture_near_count >= 10) && (this.gesture_far_count >= 2)) {
                        if ((ud_delta == 0) && (lr_delta == 0)) {
                            this.gesture_state = STATE.NEAR_STATE;
                        } else if ((ud_delta != 0) && (lr_delta != 0)) {
                            this.gesture_state = STATE.FAR_STATE;
                        }
                        return true;
                    }
                }
            } else {
                if ((Math.abs(ud_delta) < GESTURE_SENSITIVITY_2) && (Math.abs(lr_delta) < GESTURE_SENSITIVITY_2)) {
                    if ((ud_delta == 0) && (lr_delta == 0)) {
                        this.gesture_near_count++;
                    }
                    if (this.gesture_near_count >= 10) {
                        this.gesture_ud_count = 0;
                        this.gesture_lr_count = 0;
                        this.gesture_ud_delta = 0;
                        this.gesture_lr_delta = 0;
                    }
                }
            }
            return true;
        }
        /**
         * @brief Determines swipe direction or near/far state
         *
         * @return True if near/far event. False otherwise.
         */
        decodeGesture(): boolean {
            //("gesture_state"+gesture_state);
            // serial.writeLine("gesture_ud_count: "+gesture_ud_count+" ; "+"gesture_lr_count: "+gesture_lr_count);
            /* Return if near or far event is detected */
            if (this.gesture_state == STATE.NEAR_STATE) {
                this.gesture_motion = DIR.DIR_NEAR;
                return true;
            } else if (this.gesture_state == STATE.FAR_STATE) {
                this.gesture_motion = DIR.DIR_FAR;
                return true;
            }
            /* Determine swipe direction */
            if ((this.gesture_ud_count == -1) && (this.gesture_lr_count == 0)) {
                this.gesture_motion = DIR.DIR_UP;
            } else if ((this.gesture_ud_count == 1) && (this.gesture_lr_count == 0)) {
                this.gesture_motion = DIR.DIR_DOWN;
            } else if ((this.gesture_ud_count == 0) && (this.gesture_lr_count == 1)) {
                this.gesture_motion = DIR.DIR_RIGHT;
            } else if ((this.gesture_ud_count == 0) && (this.gesture_lr_count == -1)) {
                this.gesture_motion = DIR.DIR_LEFT;
            } else if ((this.gesture_ud_count == -1) && (this.gesture_lr_count == 1)) {
                if (Math.abs(this.gesture_ud_delta) > Math.abs(this.gesture_lr_delta)) {
                    this.gesture_motion = DIR.DIR_UP;
                } else {
                    this.gesture_motion = DIR.DIR_RIGHT;
                }
            } else if ((this.gesture_ud_count == 1) && (this.gesture_lr_count == -1)) {
                if (Math.abs(this.gesture_ud_delta) > Math.abs(this.gesture_lr_delta)) {
                    this.gesture_motion = DIR.DIR_DOWN;
                } else {
                    this.gesture_motion = DIR.DIR_LEFT;
                }
            } else if ((this.gesture_ud_count == -1) && (this.gesture_lr_count == -1)) {
                if (Math.abs(this.gesture_ud_delta) > Math.abs(this.gesture_lr_delta)) {
                    this.gesture_motion = DIR.DIR_UP;
                } else {
                    this.gesture_motion = DIR.DIR_LEFT;
                }
            } else if ((this.gesture_ud_count == 1) && (this.gesture_lr_count == 1)) {
                if (Math.abs(this.gesture_ud_delta) > Math.abs(this.gesture_lr_delta)) {
                    this.gesture_motion = DIR.DIR_DOWN;
                } else {
                    this.gesture_motion = DIR.DIR_RIGHT;
                }
            } else {
                return false;
            }
            return true;
        }
        /**
         * @brief Processes a gesture event and returns best guessed gesture
         *
         * @return Number corresponding to gesture. -1 on error.
         */
        readGesture(): number {
            let fifo_level: number = 0;
            let bytes_read: number = 0;
            let fifo_data: number[] = [];
            let gstatus: number;
            let motion: number;
            let l: number;
            //resetGestureParameters();
            gesture_data.d_data = pins.createBuffer(32);
            gesture_data.u_data = pins.createBuffer(32);
            gesture_data.l_data = pins.createBuffer(32);
            gesture_data.r_data = pins.createBuffer(32);
            //("read sensor start");
            /* Make sure that power and gesture is on and data is valid */
            if (!this.isGestureAvailable() || !(this.getMode() & 0b01000001)) {
                return DIR.DIR_NONE;
            }
            /* Keep looping as long as gesture data is valid */
            while (1) {
                basic.pause(30);
                /* Get the contents of the STATUS register. Is data still valid? */
                gstatus = this.APDS9960ReadReg(0xAF);
                /* If we have valid data, read in FIFO */
                if ((gstatus & 0b00000001) == 0b00000001) {
                    /* Read the current FIFO level */
                    fifo_level = this.APDS9960ReadReg(0xAE);
                    /* If there's stuff in the FIFO, read it into our data block */
                    if (fifo_level > 0) {
                        bytes_read = this.APDS9960ReadRegBlock(0xFC,
                            (fifo_level * 4));
                        for (let m = 0; m < bytes_read; m++) {
                            fifo_data[m] = data_buf[m];
                        }
                        if (bytes_read >= 4) {
                            for (let ii = 0; ii < bytes_read; ii = ii + 4) {
                                gesture_data.u_data[gesture_data.index] = fifo_data[ii + 0];
                                gesture_data.d_data[gesture_data.index] = fifo_data[ii + 1];
                                gesture_data.l_data[gesture_data.index] = fifo_data[ii + 2];
                                gesture_data.r_data[gesture_data.index] = fifo_data[ii + 3];
                                gesture_data.index++;
                                gesture_data.total_gestures++;
                            }
                            /* Filter and process gesture data. Decode near/far state */
                            if (this.processGestureData()) {
                                if (this.decodeGesture()) {
                                    motion = this.gesture_motion;
                                    this.resetGestureParameters();
                                    return motion;
                                }
                            }
                            /* Reset data */
                            gesture_data.index = 0;
                            gesture_data.total_gestures = 0;
                        }
                    }
                }
                else {
                    /* Determine best guessed gesture and clean up */
                    basic.pause(30);
                    this.decodeGesture();
                    motion = this.gesture_motion;
                    this.resetGestureParameters();
                    return motion;
                }
            }
            motion = this.gesture_motion;
            return motion;
        }
        /**
         * 读取手势数值，无手势：0；右：1；左：2；上：3；下：4；前进：5；后退：6
         */
        //% blockId=cruise_gesture_read block="Read gesture value|%strip"
        //% advanced=true
        read(): number {
            let result = GESTURE_TYPE.None;
            switch (this.readGesture()) {
                case DIR.DIR_UP:
                    result = GESTURE_TYPE.Up;
                    break;
                case DIR.DIR_DOWN:
                    result = GESTURE_TYPE.Down;
                    break;
                case DIR.DIR_LEFT:
                    result = GESTURE_TYPE.Left;
                    break;
                case DIR.DIR_RIGHT:
                    result = GESTURE_TYPE.Right;
                    break;
                case DIR.DIR_NEAR:
                    result = GESTURE_TYPE.Forward;
                    break;
                case DIR.DIR_FAR:
                    result = GESTURE_TYPE.Backward;
                    break;
                default:
            }
            return result;
        }
        readi2c(addr: number): number {
            return this.APDS9960ReadReg(addr);
        }
    }
    /**
     * 使用手势传感器前，先进行初始化。
     */
    //% blockId="cruise_gesture_init" block="Initialize the gesture sensor"
    export function gestureInit(){
        let apds9960 = new APDS9960();
        apds9960.pads9960_init();
        apds9960.enableGestureSensor(false);
        basic.pause(100);
        control.inBackground(() => {
            let prevGst = GESTURE_TYPE.None;
            while (true) {
                let gst = apds9960.read();
                if (gst != prevGst) {
                    prevGst = gst;
                    control.raiseEvent(3100, gst, EventCreationMode.CreateAndFire);
                }
                basic.pause(50);
            }
        })
    }
    /**
     * 手势传感器检测挥手动作：无、上、下、左、右、前进、后退。
     * @param gesture type of gesture to detect
     * @param handler code to run
     */
    //% blockId="cruise_gesture_listener_block" block="Detecting gestures|%gesture"
    export function onGesture(gesture: GESTURE_TYPE, handler: () => void) {
        control.onEvent(3100, gesture, handler);
    }
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
