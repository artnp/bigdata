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
];