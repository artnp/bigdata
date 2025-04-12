const videoIds = [
"ZJQjjBR6PbY?start=47&end=95,ทุกสิ่งทุกอย่างประกอบด้วยอะตอม",
"ZJQjjBR6PbY?start=3021&end=3111,ยืมอะตอมเพื่อขอกำเนิดเป็นชิ้นส่วน",
"WvoTfWwWsC4?start=22&end=45,กลไกชีวิตเริ่มต้นมาจากในน้ำ",
"V08nV7VQeNg?start=43&end=63,ใช้ภาพกำหนดฐานเลขใหญ่",
"paKr1q5Q8C8?start=7&end=114,ถ่ายเส้นลงไม้ระดับจากจุดอ้างอิงไปยังตำแหน่งใหม่โดยใช้กล้องวัดระดับ",
"ei798AN4-Fw?start=126&end=196,มองหาช่องหนีตามสถานที่ต่างๆ",
"RRsO8Lo0aJc?start=739&end=788,พกอุปกรณ์สร้างไฟติดกระเป๋าตลอดเวลา",
"xB8IpYLFna8?start=152&end=247,โครงสร้างโค้งรับและกระจายแรงกดออกข้าง",
"QeTcY9MKi4s?start=3&end=56,เสริมเหล็กในคอนกรีตให้รับแรงยืดหยุ่นสูง",
"24NjjRFL9Zc?start=24&end=60,สร้างเสาเบนเบน ให้พระเจ้าลงมาประทับจุดนี้",
"dDgr4uvet-g?start=179&end=205,พิกัดตำแหน่งพีระมิดกิซ่า 29.9792458°N เท่ากันค่าความเร็วแสงเดินทางผ่านอวกาศ 299,792,458 เมตรต่อวินาที",
"9p9NwqYstAc?start=287&end=360,ใช้หินแก้วเป็นค่าเงินแลกเปลี่ยนในพีระมิด",
"YTbPMXvoUHM?start=82&end=136,โน้มกันระยะป้องกันโดนตวัดขัดขา",
"wm1n4c9d1pE?start=14&end=39,ตวัดช้อนขัดขาจากด้านใน",
"wm1n4c9d1pE?start=38&end=73,ขายันข้อเท้าตวัดให้ล้ม",
"ommBYBxcCuE?start=107&end=137,ดึงคอเสื้อกดให้ล้มลงข้างหลัง",
"ommBYBxcCuE?start=139&end=160,ดึงคอเสื้อดันปลายคางหันติดหัวไหล่",
"J-yz5rBPXN4?start=97&end=151,ก้านสำลีถูเก็บคราบเขม่าดินปืนในโพรงจมูก",
"8j8l6bwV7j4?start=71&end=93,แช่กรดไนตริกแยกเขม่าดินปืนออกจากสำลี",
"bQnf0uL23Hk?start=271&end=326,อาชญากรจะสะกดรอยตามเหยื่อก่อนลงมือ",
"NnaWkDTD8LM?start=244&end=318,สมองแบ่งแยกระบบการทำงานเป็นสองฝั่ง",
"NnaWkDTD8LM?start=469&end=559,สมองอีกซีกสลับบุคลิกโดยไม่รู้ตัว",
"RAdUq16Jxc8?start=356&end=403,หาหมาเชื่องฟังตามคำสั่ง ฝึกเด็กให้เลิกกลัวหมา",
"RAdUq16Jxc8?start=557&end=618,ผูกจิตหมาเข้ากับลูกบอลฝึก",
"sHcwucI4uYc?start=155&end=197,สะท้อนขยายภาพฉากในสมองให้ตลกเพิ่ม",
"sHcwucI4uYc?start=311&end=366,ลดโทนเสียงลง ก่อนจะพูดแทรกประโยคสื่อสารในใจ",
"Oj-1KAyNZXQ?start=734&end=786,เอียงหัวยกคิ้ว แสดงความเป็นมิตรไร้ภัยคุกคาม",
"fvQRgcM3p0I?start=484&end=560,กระตุ้นปมด้อย ให้เสพติดผูกติดซื้อสินค้าประเภทนี้",
"0E3MvcejK-U?start=3&end=52,คางหนีบใบไม้ ฝึกเก็บคอตอนเตะ",
"UAWWlYe8yAg?start=275&end=313,ไขว้แขนถ่ายกดน้ำหนักลงขาหน้าคู่ต่อสู้ ให้ยกขาขึ้นป้องกันไม่ได้",
"tuE-WGBi67w,มือพาดหลังเตะ ช่วยให้เตะสูงขึ้น",
"YuK5d7zNRZw?start=234&end=309,สายยางถ่ายระดับน้ำตามเสา",
"YuK5d7zNRZw?start=311&end=376,เครื่องวัดระดับน้ำเลเซอร์แจ้งเตือนด้วยเสียง",
"JlLW0TWgj0w?start=108&end=145,พันปลายริ้วหัวหมุด ตีลงพื้นระบุตำแหน่ง",
"8m-G9qrDpng?start=264&end=426,ตั้งไม้แบบตั้งระดับมุมทะแยง",
"bP8iDuretmU?start=101&end=234,ตั้งไม้แบบตั้งระดับมุมฉาก",
"J16JAXF2E8w?start=83&end=121,ตำแหน่งมอสขึ้นตามต้นไม้ บ่งบอกว่าเป็นทิศเหนือ",
"xOoGVlQv26g?start=443&end=487,กิ่งก้านของต้นไม้จะเลื้อยชี้ยาวไปหาทิศใต้",
"HuwCcCKQdfs,พาดขาขาดพยุงตัวบนไม้เท้า",
"UQzCgNGOaXQ,หล่อผงกระดูกคนตายเป็นก้อนหิน",
"aWAtTRbcuqM,อาการเมาน้ำผึ้ง ดื่มน้ำตามจะยิ่งทำให้เมาหนักกว่าเดิม",
"XqK3rFUEIas,รอยย่นบนใบหน้าระบุอารมณ์นิสัยคน",
"JBpha_ug78M,แปะเทปกาวเก็บเศษเหรียญวางจำนวนมาก",
"3W60C7k31d8,นกฮูกบินจะไม่มีเสียงกระพือปีก",
"bOki4TZHG48,นักมวยโดนชกจนสมองเบลอพูดไม่รู้เรื่อง",
"m-Haf79ygQY?start=0&end=42,ปีกเครื่องบินตัดเหล็กโครงสร้างตึกอาคาร",
"m-Haf79ygQY?start=154&end=213,เผาไฟตึกอาคาร ให้เหล็กโครงสร้างอ่อนตัวจนพังถล่ม",
"m-Haf79ygQY?start=199&end=241,ทำลายโครงสร้างตึกอาคารจากด้านข้าง ให้น้ำหนักเสียสมดุลจนถล่ม",
"m-Haf79ygQY?start=57&end=100,เครื่องบินที่ทำจากอลูมิเนียมจะหลอมละลายที่อุณหภูมิ 660 องศาเซลเซียส",
"guiIJ9_7FEY?start=133&end=193,กะปิแปะช้อนย่างไฟ",
"xbGMS3LSr88?start=118&end=158,คำสั่ง HTTP request ร้องขอเพื่อดึงข้อมูลจากเซิฟเวอร์",
"A_T-SZTztIg?start=189&end=214,แรงกระแทกเข้าช่วงเอวด้านหลัง จะกระทบไตโดยตรง",
"A_T-SZTztIg?start=226&end=239,ไตกรองของเสียออกเปลี่ยนเป็นฉี่",
"A_T-SZTztIg?start=233&end=258,กระเพาะปัสสาวะเก็บฉี่ที่ผลิตออกมาจากไต",
"A_T-SZTztIg?start=669&end=701,เกลือแร่ควบคุมระบบไฟฟ้าประสาทในร่างกาย",
"A_T-SZTztIg?start=707&end=747,ไตดึงเกลือแร่กลับเข้าในเลือด หลังกรองออกไปแล้ว",
"A_T-SZTztIg?start=755&end=770,ค่าไฮโดรเจน(H) ในเลือดสูง ทำให้เลือดเป็นกรด",
"A_T-SZTztIg?start=796&end=783,ค่าไบคาร์บอเนต(HCO3-) ในเลือดสูง ทำให้เลือดเป็นด่างมาก",
"A_T-SZTztIg?start=787&end=836,ไตขับไฮโดรเจน/ไบคาร์บอเนต ออกทางฉี่เพื่อปรับสมดุลกรด/ด่างในเลือด",
"A_T-SZTztIg?start=905&end=930,ปอดควบคุมค่ากรดด่างในเลือดก่อนไต",
"A_T-SZTztIg?start=917&end=937,ปอดปรับค่าสมดุลกรดด่างในเลือด ผ่านความเร็วในการหายใจ",
"A_T-SZTztIg?start=936&end=961,ร่างกายสั่งปอดให้หายใจเร็วเพื่อขับกรดออกจากเลือด",
"A_T-SZTztIg?start=970&end=1017,ไตรับหน้าที่ต่อจากปอด ในการปรับสมดุลกรดด่างในเลือด",
"A_T-SZTztIg?start=1175&end=1240,ไตสังเคราะห์วิตามินD จากผิวหนังเปลี่ยนเป็นวิตามินD3",
"A_T-SZTztIg?start=1222&end=1240,หากไตมีปัญหา ร่างกายจะผลิตวิตามินD ไม่ได้",
"A_T-SZTztIg?start=1264&end=1296,คนเป็นโรคไต จะไม่สามารถดูดซึมแคลเซียมได้",
"A_T-SZTztIg?start=1384&end=1413,ตับแปลงแอมโมเนียเป็นยูเรียเพื่อขจัดสารพิษออกจากร่างกาย",
"E5pZ7uR6v8c?start=176&end=225,ยกของหนักโดยโยกถ่ายน้ำหนัก แล้วสอดไม้แผ่นรองทีละขั้น",
"8DBhTXM_Br4?start=252&end=323,ออกแบบปมเชือกใช้ในเผ่าตัวเอง",
"8DBhTXM_Br4?start=535&end=586,จำแนกปมเชือกทุกรูปแบบ จากห่วงวงกลม ",
"-YWWXwTCnVw?start=516&end=540,ภายในปี 2040 จะมีจำนวนหุ่นยนต์ทั่วโลก 10พันล้านตัว",
"-YWWXwTCnVw?start=530&end=566,อัพโหลดจิตสำนึกของบุคคล ขึ้นไปอยู่บนฐานข้อมูลออนไลน์",
"-YWWXwTCnVw?start=1150&end=1233,พัฒนาสุดยอดสารอาหารสำเร็จรูปเฉพาะบุคคล",
"Trs1v9BNcMs?start=54&end=98,ฝึกกำข้าวสาร ให้มือจับด้ามดาบแน่น",
"Trs1v9BNcMs?start=270&end=331,ยิวยิตสู(Jujitsu) ใช้ร่วมกับมีดดาบ รบ1:1 ฆ่าได้หมดทุกคน",
"Trs1v9BNcMs?start=334&end=381,ซามูไรกินสองมื้อ เน้นพลังงานจากข้าว",
"xVf5kZA0HtQ?start=129&end=142,แบ่งสัปดาห์ออกเป็น 7วัน ตามดาวเคราะห์ 7ดวง",
"cv6BdwMe560?start=404&end=505,หมุนเกลียวขัดเชือกให้อยู่ตัว โดยไม่ต้องมัดเงื่อน",
"NHMjYfJMthE,ดูจังหวะคู่ต่อสู้กำลังจะเตะ จากการบิดแกนลำตัว",
"EF25Tr8j-2w?start=64&end=116,ก้าวจังหวะเตะแบบลูกตุ้ม ให้เดาจังหวะเตะไม่ได้",
"pOQIXdcjWS4,นั่งย่อก่อนเตะตัดขา ให้คู่ต่อสู้มองไม่เห็นแกนบิดลำตัว",
"Bh5kHTBr0gU?start=185&end=230,ระบุดาวเหนือโดยดูจากกลุ่มดาวหมีเล็ก หมีใหญ่",
"Bh5kHTBr0gU?start=230&end=282,ดูทิศใต้จากกลุ่มดาวนายพราน จู๋นายพรานจะนำทางไปทิศใต้",
"Bh5kHTBr0gU?start=245&end=269,ดาว 3ดวง ติดกัน ระบุกลุ่มดาวนายพราน",
"gpqVWw6RxLc?start=271&end=345,ตำแหน่งจู๋ดาวนายพรานเอียง ชี้นำทางไปทิศเฉียงตาม",
"Be1DzPZqN7o?start=244&end=367,Wall Street จะใช้ onchain แปลงหุ้นเป็นโทเค็นง่ายต่อการโอนย้าย",
"9NGa5mz5cp0?start=28&end=109,จักรยานไฟฟ้าปั่นแล้วเก็บพลังงานลงคาปาซิเตอร์ ไม่ต้องใช้แบตเตอรี่",
"NYusUhZtO80?start=191&end=227,โล่กระสุนแขวนผนังเป็นรูปภาพ",
"NYusUhZtO80?start=247&end=296,โต๊ะทำงานกันกระสุนปืน",
"NYusUhZtO80?start=348&end=375,เซนเซอร์ตรวจจับตำแหน่งเสียงปืน",
"NYusUhZtO80?start=469&end=522,ผนังเม็ดลูกบอลเซรามิกป้องกันอาวุธสงครามโจมตี",
"NYusUhZtO80?start=1519&end=1559,ชุดป้องกันของมีคมแทง",
"LR2uKNuwAE8?start=5&end=73,หุ่นยนต์กลไกนก ควบคุมใช้แทนโดรน",
"AzU78eq3Kzw?start=364&end=422,สารละลายPVP ในเบตาดีนช่วยให้ชาร์จแบตเตอรี่ลิเธียมซัลเฟอร์ได้เร็วขึ้น",
"AzU78eq3Kzw?start=104&end=146,แบตเตอรี่ลิเธียมซัลเฟอร์ปลอดภัยต่อสุขภาพมากกว่าแบตเตอรี่ลิเธียมไอออน",
"_Cf0DBvTg80?start=50&end=84,ขึ้นภาษีนำเข้าให้สินค้าให้แพง เพื่อดึงโรงงานมาผลิตในประเทศ",
"_Cf0DBvTg80?start=390&end=453,ดึงเงินดอลล่ากลับให้ประเทศอื่นยากจน เพื่อที่จะรบชนะสงคราม",
"_Cf0DBvTg80?start=546&end=609,สหรัฐไม่สามารถก่อหนี้เพิ่มได้ เนื่องจากถึงเพดานหนี้แล้ว",
"IpAgnhnrvi0?start=184&end=207,ประเทศสวีเดนผลิตธนบัตรเป็นประเทศแรก",
"Uw-5UTBd4f0?start=605&end=694,สร้างโทเคนเป็นสกุลเงินดิจิตอลใช้แลกเปลี่ยนแทนเงินกระดาษ",
"1W6jSIW16U8?start=736&end=776,พิมพ์เงินอัดฉีดเข้าตลาดหุ้น ช่วยเพิ่มสภาพคล่องในตลาดการเงิน",
"1W6jSIW16U8?start=922&end=973,พิมพ์เงินไปปล่อยกู้กระตุ้นให้เศรษฐกิจให้ขยายตัว",
"q8S4FuOKELc?start=251&end=287,สงครามการค้าทำให้ทองคำราคาพุ่งสูงขึ้น",
"S-6WNmL26wE?start=105&end=145,ปี 1944 ออกแบบข้อตกลงให้เงินสกุลดอลล่าต้องค้ำด้วยทองคำ",
"9Bvr2SZm-NM?start=1212&end=1276,สหรัฐคอยกดราคาทองคำให้ต่ำลง เพื่อให้เงินดอลล่าดูแข็งแกร่ง",
"3SZxOKgg7ew,เตะเจาะยางคู่ต่อสู้ยืนอ้าฐานขากว้าง",
"ZNbmzE7g5do,เตะอัดข้อเท้าให้หลุด ตอนจังหวะน้ำหนักลงขาข้างเดียว",
"j9fg8Dmib2E?start=117&end=204,หมุนทิศวงกลมหนีจากโดนชกต่อย โดยวนออกจากหลังเท้าหน้าคู่ต่อสู้",
"1V70uNGt-7g?start=187&end=281,กราฟ S&P500 จะวิ่งเหมือนรูปแบบโลโก้ NIKE ",
"1V70uNGt-7g?start=329&end=355,ยิ่งเกิดข่าวร้ายจะทำให้ราคาน้ำมันยิ่งเพิ่มขึ้น",
"1V70uNGt-7g?start=359&end=411,กราฟบิทคอยน์เคลื่อนที่เป็นตัวU ต่อสู้ระหว่างความกล้าและความกลัวสุดขีด",
"1V70uNGt-7g?start=413&end=466,กราฟใจกลางตัวU บ่งบอกฐานมูลค่าที่แท้จริงของราคาบิทคอยน์",
"1V70uNGt-7g?start=556&end=658,บิทคอยน์อาจไม่ได้นำเอามาใช้งานจริงในโลกการเงิน",
"P--5YMH3r4w?start=592&end=678,จัดการระเบียบชีวิตไม่ให้อารมณ์เหวี่ยงสวิงขึ้นลง",
"CjskhHknjlE?start=898&end=969,มุขคุยแลกเปลี่ยนแบบข่มหน้าตาย",
"2tMyCmGgf5k?start=386&end=430,รออ่านจังหวะ J-Hook Pattern",
"emd-Yk1pE-4?start=124&end=160,กราฟ Crypto Total Market Cap วิ่งเป็นเส้นเดียวกับ Global M2 YoY Change ",
"emd-Yk1pE-4?start=160&end=174,Global M2 ขึ้น 10% ราคาบิทคอยน์จะวิ่งตาม 80.95%",
"emd-Yk1pE-4?start=188&end=230,EPU Index ปรับตัวขึ้นสูงสุด จะส่งผลกระทบต่อระบบการเงินรวม",
"emd-Yk1pE-4?start=246&end=275,ผลักกราฟ Global M2 นำหน้ากราฟบิทคอยน์ 3เดือน เพื่อดูแนวโน้มอนาคต ",
"emd-Yk1pE-4?start=282&end=348,กราฟ Global Liquidity Cycle มีรอบปรับตัวจากจุดต่ำสุดถึงสูงสุด 33วัน",
"VmUg3mc95WI?start=86&end=169,ตบหัวตีเข่าเข้าหน้า ให้ไม่ทันรู้ตัว",
"GQx82Q8FBGg?start=65&end=144,ขยับก้าวขาหลังเข้า สร้างแรงบิดลำตัว",
"LLfEcrp0TWs?start=107&end=140,ความประสงค์ให้อ่านหนังสือ Book of Jeremiah ",
"RQ2nYUBVvqI?start=217&end=249,แปลงเศษส่วนเป็นอัตราส่วน",
"yGu5kPWRoIw?start=158&end=219,วิธีนับเลขฐาน 60",
"MXveVqBxFow?start=439&end=502,สูตรถอดรากที่2 ของบาบิโลน",
"44KdIPVropw?start=1288&end=1315,เฉลยปัญหาเชาว์: วาดสี่เหลี่ยมด้วยเส้น 3เส้น",
"I7JyydkqDeI?start=2369&end=2446,แว่น AR ไร้สาย ควบคุมการสัมผัสผ่านสายข้อมือ",
"z_sz36KVl_M?start=2440&end=2491,RSI Timeframe: Month เกิน 90 สัญญาณตลาดเฟ้อ",
"UaN33BfkwVc?start=165&end=230,ทอดเนื้อปลา โดยเอาฝั่งหนังลงกระทะ",
"UaN33BfkwVc?start=245&end=291,ทอดเนื้อปลาฝั่งเดียว ไม่ต้องกลับให้เสีย",
"UaN33BfkwVc?start=422&end=449,แทงลวดเข้าไขกระดูกปลาจากทางลูกตา",
"eIr1M-MJeLs?start=3396&end=3528,แรงโน้มถ่วงมากทำให้เวลาเดินช้า",
"eIr1M-MJeLs?start=4574&end=4730,ให้แรงโน้มถ่วงดันอยู่กับที่ ทำให้เวลาเดินช้ากว่าคนอื่น",
"bL0_UDGW-Ho?start=1052&end=1099,ขุดจนกว่าจะเจอดินทราย ถึงจะวางฐานรากได้",
"2bHdK7juR5g?start=549&end=629,อัพโหลดมุมมองขึ้นบนดาวเทียม เร่งเวลาให้เดินไวขึ้น",
"9ZXo_0-wbe8?start=153&end=198,เต็นท์โครงสำเร็จรูป กาง/เก็บรวดเร็ว",
"2ayxsNd51YM?start=485&end=576, ไชโป้วหวานใส่ไข่เจียว",
"2ayxsNd51YM?start=390&end=458,ผงชูรสปรุงใส่ไข่เจียวอร่อยสุด",
"_8nnJjbMsk8,เทน้ำแข็งใส่กระทะสแตนเลสร้อน ทำความสะอาดคราบฝังแน่น",
"hvQG37NozHU,ใช้คลื่นเสียงความถี่สูงสั่นแผ่นโลหะ ให้ตีกระจายน้ำเป็นไอหมอก",
"fvfvUzy64sw,แขวนลูกโป่งลอยฟ้า ช่วยยกสะพายกระเป๋า",
"uAx7QGK0EVQ,โบกพัดมือด้วยความเร็ว สร้างแรงดันต่ำหน้าใบพัด",
"iDd0-GR4-VA,ใช้อาหารหรูเตือนสถานการณ์เลวร้าย",
"kZbsl-Ibl2w,ดีดเข็มเจาะเข้าเส้นเลือด",
"8IJhx6SAkaU,ใช้มือเดียว ตวัดถูขัดเชือกให้ขาด",
"_Ao6_UN0K5M,รากต้นไม้ใส่ขวดน้ำฝังดิน ช่วยให้ต้นไม้รอดตายจากการย้ายที่",
"5byeTqFCWzM,ลูกกลิ้งดัดรอยโลหะยับบู้บี้",
"tXfQ6cFf9Ek,ฝังเหล็กในลูกเต๋าให้โยนตกหน้าเดียว",
"WvqPzhNCtZA,ผูกมีดติดแขนคนแขนด้วน",
"BF8LYUWY8j4,ขาดน้ำทำให้ร่างกายเป็นตะคริวเดินไม่ได้",
"ZG0KhGBIbhA,ทำภาษามือแกล้งหูหนวก ป้องกันคนโกรธเมื่อทำผิด",
"DeTBUyGMOuM,หันเข่ารับลูกเตะตำแหน่งข้อเท้า ให้เท้าคู่ต่อสู้บวมอักเสบ",
"kxD_r6IP1Xs,เตะแล้วหมุนออก ให้ขาคู่ต่อสู้หันตามเป็นเส้นขนาน",
"D6KRrYsmLRM?start=429&end=450,SOPR ใช้ดูค่าว่า คนส่วนมากกำลังเทขายบิทคอยน์",
"D6KRrYsmLRM?start=515&end=575,CBBI วิเคราะห์ข้อมูล on-chain หลายตัว รวมเป็นค่าเดียว",
"D6KRrYsmLRM?start=52&end=82,แบ่งแยก 3ขั้นตอน วิเคราะห์ทิศทางกราฟบิทคอยน์",
"D6KRrYsmLRM?start=652&end=679,LunarCrush ตรวจจับอารมณ์คนส่วนมากในตลาดเทรด",
"9d12zDdf9jU?start=2&end=82,CBBI <=10 เป็นรอบจุดต่ำสุดของตลาดคริปโต",
"hwyP0a8Uq_g?start=284&end=374,เรียกร้องข้อเสนอเกินจริง เพื่อให้อีกฝ่ายมาเข้าหาศิโรราบ",
"hwyP0a8Uq_g?start=392&end=434,อ่านหนังสือของคนนั้น เพื่อหารูปแบบวิธีคิดซ้ำๆ",
"U7V50ZMRPqg?start=230&end=261,เก้าอี้สนามแกนนั่งโยกได้",
"U7V50ZMRPqg?start=267&end=307,กระเป๋าเป้แบ่งชั้นเก็บของ",
"U7V50ZMRPqg?start=376&end=412,โครงจักรยานปรับเป็นเพิงพัก",
"U7V50ZMRPqg?start=425&end=483,กระเป๋าเก็บของแช่แข็ง",
"U7V50ZMRPqg?start=588&end=628,สายชำระปั้มลมพกพา",
"U7V50ZMRPqg?start=1371&end=1418,โยกสูบกรองน้ำแบบไม่ต้องใช้ไฟฟ้า",
"cTMvbjph8MI?start=647&end=686,เผาไฟล้างโลก ก่อนบัญชาให้น้ำท่วมซ้ำ",
"gABN8Z4Yw2Q?start=164&end=242,เวลาฝึก 10,000ชั่วโมง ให้เชี่ยวชาญแต่ละสาขา",
"gABN8Z4Yw2Q?start=381&end=414,เข้าถึงการฝึกฝนเทคโนโลยีก่อนคนอื่น",
"gABN8Z4Yw2Q?start=462&end=494,วิเคราะห์จุดอ่อน ฝึกแก้ไขซ้ำเป็นเวลา 10,000ชั่วโมง",
"gABN8Z4Yw2Q?start=601&end=636,จดจ่อทักษะจนลืมสภาวะแวดล้อม เข้าสู่ทักษะชำนาญ",
"gABN8Z4Yw2Q?start=961&end=981,เทียบทักษะปัจจุบันกับอีดตย้อนหลัง ว่าพัฒนาไปทิศทางไหน",
"Wz7WhfDfppw?start=1080&end=1125,มุขตลก: พูดไม่รู้เรื่อง จากผีเป็นสี",
"gQUO2Rwkl7w?start=21&end=95,ความกว้างมุมกระดูกเชิงกรานระบุเพศ",
"wmMQxUKRQ-c?start=6&end=27,ปลาไหลมอเรย์กัดแน่นจนตัวตาย",
"ZlVbMJihoMc?start=182&end=208,นกเกาะสายไฟเยอะผิดปกติ สัญญาณพายุจะมา",
"N97Q0P7cFdY?start=25&end=94,หุ่นยนต์ 4ขา ขี่ปีนเขา ",
"41z3oZ8iIME?start=47&end=117,ใช้เลข 28, 19 กำหนดรอบวัฏจักร Enoch",
"trwEDZ8WxV4?start=25&end=109,พับปีกแขนนอนกดทับหลัง",
"X7sYPU4Aaf8?start=138&end=210,บากร่องไม้เกี่ยวขึงเอ็น",
"dGNAwxi9uwA?start=140&end=202, เพ้นท์ลายบนไม้อัด กำหนดตำแหน่งโครงคร่าว",
"J-Zf8hfVZMs?start=47&end=93,วางตงพื้นซ้อนขัดประสานกัน",
"uXEzKSxNt9k?start=72&end=165,แท่งแม่เหล็กวิ่งบนน้ำหาทิศเหนือ/ใต้",
"VwRJx-0Gkns?start=20&end=63,วางสันแม่เหล็กกลมหาทิศเหนือ/ใต้",
"uYLiuGCPY9c?start=14&end=36,ห้อยแม่เหล็กกับเชือกหาทิศเหนือ/ใต้",
"VnBcpimu2YM?start=201&end=257,มองภัยอันตรายในสถานการณ์เดียวเป็นหลายมิติ",
"Pk8a1NlYb5c?start=527&end=651,พูดขู่ฆ่านักข่าวให้เรื่องใหญ่บานปลาย",
"u4lDrWAKJmQ,ปุ่มคีย์ลัด Task Manager = Ctrl+Shift+Esc",
"CAH0B1ErriI?start=48&end=194,Task Scheduler กำหนดสั่งเปิดไฟล์ทุกช่วงเวลา",
"VngSa2YP3qw?start=4&end=71,เหรียญคริปโตที่อนุมัติจาก MiCA จะครองฐานตลาดยุโรปก่อนเหรียญอื่น",
"vd2wGVUyMoc?start=356&end=395,ปี1600 กำหนดมาตราฐานให้ใช้อิฐมอญสร้างบ้านกันไฟไหม้",
"vd2wGVUyMoc?start=52&end=116,เผาดินเหนียวที่อุณหภูมิ 900องศา จะแดงกลายเป็นอิฐมอญ",
"PucdKHmns98?start=147&end=197,ควันธูปเชื่อมเหล็ก มีเศษโลหะหลายชนิดปนเปื้อนจำนวนมาก",
"PucdKHmns98?start=215&end=258,ควันธูปเชื่อมเหล็กลอยปนเปื้อนในอาหาร",
"tmFZEEgu7-c?start=1449&end=1550,AI ช่วยออกแบบศาสตร์การเรียนรู้เป็นขั้นตอน",
"tmFZEEgu7-c?start=1576&end=1650,AI สร้าง canvas ระบบจำลองโดยไม่ต้องเสียเวลาเขียนโค้ด",
"tmFZEEgu7-c?start=1796&end=1843,เริ่มต้นเก็บข้อมูล สร้าง AI Agent เฉพาะบุคคล",
"tmFZEEgu7-c?start=2627&end=2679,AI สร้างกำกับฉากวิดีโอแบบละเอียด",
"tmFZEEgu7-c?start=2966&end=3142,คุม AI หลายตัวทำงานพร้อมกัน",
"tmFZEEgu7-c?start=3448&end=3541,อุปกรณ์ช่วยฟังเสียงส่งให้ AI สรุปตลอดเวลา",
"25T8SY27x1w?start=24&end=49,ใส่ @ข้างหน้า url youtube ให้ Gemini AI ประมวลผลในคลิป",
"-8bM0EW7mzg,แปลงตัวเขียนลายมือเป็นฟอนต์ทันที",
"n5heAVbj7_4?start=123&end=158,Model AI แปลเอกสาร PDF ด้านในแบบไม่เปลี่ยนตำแหน่ง",
"VF9AqTuBNlY?start=1&end=20,ถามข้อมูลใน youtube  ผ่าน AI ในมือถือ ",
"Iy4PuAZQyo8?start=101&end=168,J.P. Morgan ช่วยกู้วิกฤติการเงิน ปี1907",
"jMpztX2c29I?start=425&end=486,ศตวรรษที่19 ระบบอุตสหกรรมอเมริกาโตแบบก้าวกระโดด",
"uBGJE776Tqo?start=0&end=26,มนุษย์เพิ่งจะค้นพบทองคำ 0.003% ที่อยู่บนโลก",
"y0nZkNmCu6g?start=22&end=35,กำหนดตอม่อสูงจากพื้นดิน 20ซม.",
"jyjlZe962JA?start=207&end=232,ขุดจนเจอชั้นดินแข็ง ถึงจะวางฐานรากแผ่ได้",
"unV5U6iC3nE?start=121&end=237,ทองแดง + ดีบุก = ทองสำริด",
"unV5U6iC3nE?start=236&end=241,ทองคำ + ทองแดง = นาก",
"PKKXyGm54ns?start=170&end=199,ประกายไฟจากตัดเหล็กกล้า สะเก็ดไฟจะกระเด็นแตกตัวเป็นระยะ",
"PKKXyGm54ns?start=198&end=206,เหล็กคาร์บอนต่ำเมื่อตัด สะเก็ดไฟจะวิ่งเป็นเส้นถี่ยาว",
"jKV8d2Ptk3g?start=306&end=343,เต้าหู้ที่ทำจากแคลเซียมซัลเฟตจะมีแคลเซียมสูง",
"cDBnqPpUTcM?start=30&end=56,เสริมธาตุเหล็กเกินทำลายอวัยวะภายใน",
"CCsGt4ld2Rc?start=62&end=88,ขาดธาตุเหล็กทำให้เลือดประจำเดือนออกเยอะกว่าปกติ",
"wUCra5AbEGQ?start=244&end=255,ขาดแร่ธาตุสังกะสีทำให้ระบบภูมิคุ้มกันร่างกายต่ำ",
"o7Nk0Ff1d9I?start=1&end=13,เมล็ดฝักทองมีแร่ธาตุสังกะสีปริมาณมาก",
"eCrQXjFqwO0?start=22&end=76,11.11 วันเชื่อมจิตกับมนุษย์",
"2OpHbyN4vEM?start=658&end=696,กำหนดตามต้องการเป็นลำดับขั้นตอน ให้ AI ช่วยเขียนโค้ด",
"Y4GJGtPD0aY,ความเร็วเครื่องแสกนหนังสือ 2,500หน้า:ชั่วโมง",
"Hzs8YB1o5tc,ไม้เกี่ยวดึงคนโดนไฟดูด",
"GVGolkTCrck,แกล้งผิวปากทำลายจังหวะ",
"_0DOmyhB35s,ใช้หมาพันธุ์ฮัสกี้เป็นพี่เลี้ยงสัตว์ดุร้าย ให้มีนิสัยอ่อนโยน",
"sw95sVtw7oI,เชือกรูดชักผ้าใบบังแดด",
"IWcV4hjYj04,วางคว่ำขวดน้ำเช็คแผ่นดินไหวต่อเนื่อง",
"C3h9POWSkuw,จัดเตียงชิดกำแพง ให้มีที่ใช้สอยเพิ่มขึ้น",
"9G4oXjND0GY,ถังขยะครอบตัวคนทะเลาะกัน",
"EnrdXkkAr1s,เชื่อมเก้าอี้เป็นด้ามจับจักรยาน แปลเป็นที่นั่งได้ทุกที่",
"J5jzT2ybOtg,ฝึกแมวเกาะปีนด้ามไม้กวาด",
"-Cy7WAvN2lg,กีดท่อเหล็กกลม สอดเชื่อมเหล็กกล่องให้แนบสนิท",
"R1m9gPopvcw,โหนถ่วงไม้คาน กระจายแรงงัดยกของหนัก",
"f_bgTTuUE68,ต่อธูปเชื่อมคัดลอกมุมชิ้นงาน",
"TXPrrxAwC0s,เย็บแบบซ่อนด้าย",
"68rfDr7qjOU,จอโรงหนังรอบตัว",
"1RuTfUSKaec,เคเบิ้ลไทร์เชื่อมต่อซี่ลวดขาด",
"dr4TDeyHy3I?start=148&end=192,ถุงน่องคลุมเท้ากันทาก",
"Imqc0GYA8kw?start=1&end=41,ทายาสูบป้องกันทากเกาะ",
"r3W0WfyYDk0?start=30&end=50,ยาเส้นผสมน้ำทากันทากเกาะ",
"76_e-1UIL44?start=748&end=837,โรยแป้งที่ขากันทากเกาะ",
"8jnKVQTDn50?start=0&end=10,มุ้งคลุมร่มสนาม เป็นที่พักกันยุง/แมลง",
"IFuovcX6N_A?start=0&end=12,มุ้งคลุมนอน แบบเก็บพับแบน",
"K49OohbZxVc?start=665&end=651,ตัดปล้องไม้ไผ่เป็นกระบอกฝาปิด เก็บใส่อาหาร",
"uXKiQfnQNlc?start=0&end=19,ดัดตะขอสองชั้นเกี่ยวไถลปากปลา",
"uoOB5cyEfTw?start=17&end=51,ต้นเฟิร์นขึ้นบ่งบอกแหล่งความชื้นในดิน",
"tmzyE9AawiE?start=13&end=58,เปิดจอกล้องพูดคุยกับ AI",
"tmzyE9AawiE?start=91&end=126,แสดงผลจอภาพให้ AI ดู",
"QRJIzfhU8r4?start=689&end=739,1% ของ Global M2 ไหลเข้าบิทคอยน์ในปี2025 จะดันราคาไปที่ 146,825$",
"40UHGyzUrBo?start=425&end=455,สูตรคำนวณฐานราคาบิทคอยน์จากจุดยอด Global M2: y = 5.88 * 10**(-20) * M2**11.9696",
"lxlBRUkymiU?start=856&end=947,มองตัวเลขภาพรวมใหญ่ทั้งหมด ป้องกันข้อมูลย่อยหลอกบังตา",
"lxlBRUkymiU?start=944&end=1002,โอกาสขึ้น = ครั้งที่ถูก / (ครั้งที่ถูก + ครั้งที่ผิด)",
"OpeRdxQGfpY?start=11&end=40,เทียบความยาวปอกสายไฟต่อเต้ารับ",
"9oTqeoc2VvM?start=55&end=115,มดกำหนดนับจำนวนก้าวเดินทาง จากสถานที่สู่อีกสถานที่",
"Y3rOzjNphU8?start=118&end=262,กระจายเศษอาหารหมักปุ๋ยไม่ให้เป็นกอง แก้ปัญหาแมลงวัน ",
"Y3rOzjNphU8?start=273&end=311,กองกระจุกเศษอาหารหมักปุ๋ยทำให้แมลงวันมาไข่",
"uWgTwBkqzGg?start=302&end=341,เตะไข่ให้ก้มแล้วรัดคอ",
"DBTNXtbmtsE?start=151&end=193,เก็บข้อมูล Data เหมือนได้ครอบครองตะเกียงวิเศษ",
"9jA6usRg9oI?start=3&end=28,เขียนงานวิจัยทั้งชีวิตลงหนังสือ",
"4-f-NEfmbdQ?start=396&end=472,ดวงจันทร์ดึงน้ำขึ้น/ลง รอบละ 12 ชั่วโมง",
"X6twcoxnFuk,แบ่งนับรอบพระจันทร์ 29วัน",
"nZ_XohXP0d0?start=4&end=34,ในฤดูหนาวกลางวัน พระอาทิตย์จะเคลื่อนที่ต่ำ",
"nZ_XohXP0d0?start=0&end=16,ในฤดูร้อนกลางวัน พระอาทิตย์จะเคลื่อนที่สูง",
"OGard5kTRWk?start=31&end=52,ดูความยาวเงาจากพระอาทิตย์ใกล้ขอบฟ้า",
"kOuXrhI74N8,เตะเมื่อโดนหมัดตรง ขาคู่ต่อสู้จะยกกันไม่ได้",
"Rz7ZBn6fFHE?start=903&end=956,ใส่ฟลูออไรด์ลงน้ำดื่มให้สมองประชาชนพัฒนาช้า",
"jDkz8ajfaI8?start=0&end=57,หายใจทางจมูกขณะวิ่ง เร่งให้ร่างกายผลิตไนตริกออกไซด์",
"vMj6a-G5JWs?start=1&end=30,ไนตริกออกไซด์ช่วยขยายหลอดเลือดให้เปิดกว้าง",
"xRVIJUeU0_8?start=18&end=49,ไนติกออกไซด์สามารถผลิตได้จากการหายใจทางจมูกเท่านั้น",
"2aWSwXDD0cg?start=0&end=18,ในจมูกมีตัวรับเคมี ไวต่อการรับสารระเหย",
"1pZCbjmEGNw?start=76&end=123,ปรับความหวานในอาหาร ให้สมดุลกับความหวานในไวน์ที่เสริฟ",
"LDoH8qsQhvg?start=2&end=41,เกลือช่วยให้สมองรับรู้รสขมได้น้อยลง",
"u1if4HnDmBI?start=519&end=577,ใช้สารทดแทนเกลือ กินแทนเกลือโซเดียม",
"DKQJsAPi9yo?start=0&end=33,เห็ดหอมแห้ง เก็บรสชาติอูมามิไว้ในตัวสูง",
"S28lBF9Pn38?start=581&end=637,ให้มีลูกเป็นหุ่นยนต์ ลดจำนวนประชากรมนุษย์",
"S28lBF9Pn38?start=1071&end=1150,เทคโนโลยีเข้ามาจัดการอารมณ์คน เป็นจุดเริ่มต้นความหายนะ",
"S28lBF9Pn38?start=1653&end=1701,ร่างกายคือแผงวงจร เมื่อรวบรวมจัดระเบียบพลังได้เป็นระบบ จะทรงพลัง",
"YCTRVOcXFAM?start=132&end=208,เลี้ยงแมวไว้กำจัดศัตรูพืชในอาณาเขต",
"zIFILyE3qyM?start=123&end=383,แบ่งครึ่งเส้นตรง ดัดให้เป็นเส้นโค้ง",
"Z5X1K1I8xEc?start=36&end=78,ลอยขดตัวกอดตัวในน้ำ ช่วยเก็บความร้อนในร่างกาย",
"Z5X1K1I8xEc?start=84&end=94,จับกลุ่มชนหลังลอยตัวตีขาในน้ำ ส่งสัญญาณขอความช่วยเหลือ",
"JCppGlpkg9M?start=12&end=24,หมัดกัดโดยคว้านชั้นผิวหนังออก",
"L09GSFONO1Q?start=8&end=33,ชั้นเนื้อผ้าเดนิม,ลินิน ป้องกันยุงกัด ระบายอากาศได้ดี",
"0fEIffHfAaI?start=677&end=734,มาตรฐานสติปัญญาพื้นฐานให้คนทั้งโลกมีเท่ากัน",
"0fEIffHfAaI?start=771&end=854,ใช้เทคโนโลยีคุมอารมณ์มนุษย์ให้เป็นหนึ่งเดียว สร้างขุมพลังงานบนโลก",
];