# CruiseBit Package for Microsoft PXT

The github address of the package is https://github.com/alsrobot-microbit-makecode-packages/CruiseBit
The maintenance staff of the package is https://github.com/lzl525898

This software package is specially developed for Cruise educational robots. The Cruise robot has not been put into mass production, so it has not been put on the official website of ALSRobot. For details of its accessories, please visit:http://www.alsrobot.cn/goods-413.html

## Drive Cruise    
Use the motorRun() method to set the speed value of the left and right motor of the Cruise to drive it and set the travel time. Use the motorGo() method to set the speed value of the left and right motor of the Cruise to keep it running. The speed range is -1023~1023, the speed value is positive motor forward rotation, and the speed value is negative motor reverse rotation.

// Drive forward for 1 second
CruiseBit.motorRun(500, 500, 1)

// Driving backwards
CruiseBit.motorGo(-500, -500)

## Let Cruise sound

Use the myPlayTone() method to let Cruise emit tones, including: do, re, mi, fa, sol, la, si, and the beats include: 1/8, 1/4, 1/2, 1, 2, 4

// Play tone do beat for full shot
CruiseBit.myPlayTone(ToneHzTable.do, BeatList.whole_beat)

## Line of inspection

Use the readPatrol() method to implement the line inspection function.

// When both line sensors are on the black runway
CruiseBit.readPatrol(Patrol.black_black)

## Ultrasonic measurement of obstacle distance

Use the sensorDistance () method to achieve the function of ultrasonic testing obstacle distance, the unit can choose μs or cm

//Obtain obstacle distance (in cm)
CruiseBit.sensorDistance(PingUnit.Centimeters)

##Infrared detection for left, front, and right obstacles

//If there is an obstacle in front of the method, it returns true, otherwise it returns false.
CruiseBit.cruiseIR(IRList.front)

##Control onboard LED lights

//Set all onboard LED lights to be bright in red
CruiseBit.setRGB(RgbList.rgb, ColorList.red)

//Turn off all LED lights
CruiseBit.neoClear()

## Support

* for PXT/microbit

## License

MIT


# 奥松克鲁斯教育机器人microbit软件包

软件包github地址为：https://github.com/alsrobot-microbit-makecode-packages/CruiseBit
软件包修改维护人员：https://github.com/lzl525898

该软件包专门为克鲁斯教育机器人开发，克鲁斯机器人还未投入批量生产，故未在奥松机器人官方商城上架，它的配件信息请访问：http://www.alsrobot.cn/goods-413.html

## 让克鲁斯行驶    
使用motorRun()方法设置克鲁斯左右电机的速度值，使其行驶，并可以设置行驶时间。使用motorGo()方法设置克鲁斯左右电机的速度值，使其持续行驶。速度值得范围是-1023~1023，速度值为正电机正转，速度值为负电机反转

// 向前行驶1秒
CruiseBit.motorRun(500, 500, 1)

// 向后行驶
CruiseBit.motorGo(-500, -500)

## 让克鲁斯发出声音

使用myPlayTone()方法，让克鲁斯发出音调，音调包括：do、re、mi、fa、sol、la、si，节拍包括：1/8、1/4、1/2、1、2、4

// 播放音调do节拍为整拍
CruiseBit.myPlayTone(ToneHzTable.do, BeatList.whole_beat)

## 巡线

使用readPatrol()方法实现巡线功能

// 当两个巡线传感器均在黑色跑道上时
CruiseBit.readPatrol(Patrol.black_black)

## 超声波测障碍物距离

使用sensorDistance()方法实现超声波测试障碍物距离的功能，单位可选择μs或cm

//获得障碍物距离（单位为cm）
CruiseBit.sensorDistance(PingUnit.Centimeters)

##红外线探测左、前、右是否有障碍物

//如果前方有障碍物下面的方法返回true，否则返回false
CruiseBit.cruiseIR(IRList.front)

##控制板载LED灯

//设置所有的板载LED灯亮，颜色为红色
CruiseBit.setRGB(RgbList.rgb, ColorList.red)

//关闭所有LED灯
CruiseBit.neoClear()
## 支持

* for PXT/microbit

## License

MIT
