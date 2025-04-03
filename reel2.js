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
];