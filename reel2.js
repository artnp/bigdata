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
];