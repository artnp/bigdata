const videoIds = [
"plL1eodGYiQ,กดแขนเปิดการ์ด",
"aeIfWam4FUI,กอดล็อคข้างลำตัว",
"uQjR1XiJBII,เลเซอร์ติดเลื่อยวงเดือน",
"hRpbn5tU7iA,ใช้ไม้พันเทปพันเกลียวในที่แคบ",
"J8pn3nf61rk,หลบลูกเตะทำลายจังหวะ",
"mjqsoD1Lfvc,หันข้างลำตัวยันแขนดัน",
"e8X2s4PEexI,สามเหลี่ยมความต้องการพื้นฐานของผู้บริโภค",
"eTZsP4W9L-4,ท่าเพิ่มกล้ามเนื้อหัวไหล่",
"Fgc-V-6VVSU,รางจืดใช้ถอนพิษ",
"d7NSCYHc9hI,ท่อรูปตัว M ลักน้ำ",
"xR774iFHKK4,ท่อPVCไขเกลียวใต้ก๊อกน้ำ",
"Pagl1zg0j4A,กระจายแรงสั่นสะเทือนโดยใช้คลื่นความถี่เดียวกัน",
"JuYqEWZgWQE,ดอกบานหัวท่อทองแดง",
"S_lcuOuVD2k,เวทคณิตคำนวณกำลังสอง 21-30",
"0oGnnmPq7kw,เดินพุ่งหมัดตรง",
"C526nLZeDek,Darvas Box กราฟหลุดกรอบขึ้นค่อยซื้อหุ้น",
"OXUMPRbf-Uk,ระบุเป้าหมายที่ 20 จะเป็นเป้าหมายที่เปลี่ยนชีวิต",
"Qy6KtaJ72go,จงรู้ทุกมุมในสิ่งที่ลงทุน",
"ZilyrNdR-yQ,ถุงดักแมลงวัน",
"ABZmvRbthWQ,ถุงดักแมลงวัน",
"CQJDflq8NLs,คลิปตะขอเกี่ยวยึดไม้ระแนง",
"7tyhV1BDW_U,ผังสร้างเส้นเรื่อง",
"B4Rjv3qbkUo,ตะแคงเรือวิดน้ำออก",
"cm46zUM8g98,เข่าลอยสองชั้น",
"PBP8vLu5IOs,ข้อนิ้วชี้วัดหน่วย 1นิ้ว",
"w4uNW3_OnyE,ตัดถังเติมน้ำแนวนอนให้สัตว์ดื่ม",
"0vZHmXtmA_k,เกี่ยวดอกกุญแจหักคาแม่กุญแจ",
"JDfyY-ggX68,ดูระดับน้ำจะท่วมกรุงเทพ",
"frb0PYs-urs,เตะหัวน็อค",
"Fe0BLl4M-Ug,ทดลองไฟฟ้าสถิตด้วยกระดาษ",
"V1xI0iqA9XA,ใบย่านาง ใบบัวบก ล้างพิษอุจจาระตกค้าง",
"6WBQ6UhS5JM,เทน้ำปูนเหลวปรับพื้น",
"sfslTkppXkM,คว้าจับปีกเท้า",
"cEpBUPDS-00,เอียงปืนประทับไหล่",
"twxpcb-liBc,เตะรักษาระยะห่าง",
"lDEqFufQNB8,เล่นทรายกับแมว",
"NzWgeL1v4rA,ทำตะขอจับจากเหล็กเส้น",
"XajPRtPSf8M,ชั้นสูญญากาศกักเก็บอุณหภูมิ",
"PlBvWTL-8eg,ปริศนาปูตินหน้าหมู",
"AFHKul1HhfA,เศษท่อPVCห้อยไม้กวาด",
"59ElG5EyINU,หมุนเก็บสายไฟ",
"mCLTAIlTY8I,โซเวียตทิ้งกากนิวเคลียร์ลงทะเลสาบ",
"patMUFLk7TE,เปลี่ยนแปลงตัวเองเพื่อเปลี่ยนแปลงคนอื่น",
"68S2xCLz8FI,หาค่าแฟกทอเรียล",
"h_btxkM15pw,ไม่ดำเนินชีวิตตามความคิดเห็นของผู้อื่น",
"_nBZzDlTAEc,โจรสลัดปรับสมดุลตาที่มืดกับสว่างด้วยการปิดตาข้างเดียว",
"RMj2nAb-QbI,สัญญาณโรคไต: ปวดไต ตัวบวมน้ำ ฉี่บ่อย ความดันสูง เหนื่อยง่าย",
"A3fzdYak1O8,นมผึ้ง อาหารทำให้นางพญาผึ้งอายุยืน",
"Ni9X6By4uJU,ยึดชิ้นงานกับขาข้างโต๊ะ",
"gem_BOiyMu8,ปากกาดิจิตอลวาดภาพเขียนเข้าเครื่อง",
"ywe2DCZ9dXM,เคมีเปลี่ยนสีของไฟ",
"l7um440kfdU,ขนย้ายสะพานลอยโดยใช้ล้อ",
"R_tLt3pI9sM,แปะเทปป้องกันยาแนวเลอะกระเบื้อง",
"48H4p_Qgapc,ใช้เท้าเกี่ยวเพื่อข้ามการ์ด",
"KoR__FNl5OU,ใช้ขอบประตูเป็นมุมเล็งปืน",
"HbOehLD5IyM,ปรับความปรารถนาให้พอดีกับรายรับ",
"nP6ik2fgC80,ปะเก็นยางซ่อมรองเท้าแตะคีบ",
"jiQLWoNixIU,หอยเชอรี่ระบาดในนาข้าว",
"QbzOcNgciJQ,เลื่อยยาวเลื่อยท่อนซุง",
"qgoxfxHsQNo,เขวี้ยงเหวี่ยงหมัดทั้งแขน",
"1DDTn2RM5kI,อาการโรคลมชักในเด็ก",
"D3Y9-u6xk0Q,เวทคณิตคูณลัดเมื่อเลขตัวหลังบวกกันได้10",
"XFQrDIc4bi0,จับขาดึงทำลายจังหวะให้ล้ม",
"WLgrh9DyLeM,ปัตตาเลี่ยนโกนเศษขนกำมะหยี่",
"iE8QOjea30I,คีมจับช่วยค้อนงัดตะปูหัวขาด",
"aWx4Plosf9I,ปูกระเบื้องแก้พื้นเอียง",
"_BxDPMeXbrw,ลอกขวดพลาสติกพิมพ์งาน 3มิติ",
"5GywrZOEIE0,บล็อคกันหมัดพร้อมสับศอกใส่",
"Zsv6yFUzocU,เหล็กฉากต่อดามไม้",
"kY723z_suhQ,หมุนเกลียวเทปกาวทำเชือก",
"3bxzLP3fXug,ค้อนตอกฝังน็อตสกรู",
"YRUcUvMnhsc,หล่อกาวเป็นหัวกันกระแทก",
"Rm75K6_XYRE,เบี่ยงรถขับขึ้นเนิน ป้องกันตัวถังกระแทก",
"ly4jWFzv3a4,ตารางเมตรหน่วยใช้กับอาคาร ตาราวางหน่วยใช้กับที่ดิน",
"DbMP4GJYB1g,ถังติดล้อหมุนเก็บสายยาง",
"EWvvwrPp84o,ชกหน้าอกให้ลดบังการ์ดออกจากหน้า",
"8QEQrp2Y-w8,กระดาษทรายติดแผ่นไม้ ดัดขัดมุมโค้ง",
"vxyv8DCKXFw,น้ำการพูดเปรียบเสมือนโทนเสียงในเครื่องดนตรี",
"ZV8_xQylUng,แต่งตัวสัดส่วน 1:2",
"164yUaoVRLQ,คลองแห้งจะมีน้ำใต้ดินอยู่",
"pIeWUMikujw,ใส่หูฟังครอบหูข้างเดียว เพื่อเช็คเสียงจริงตัวเอง",
"NCAsuC0sDco,แท่งไม้เกี่ยวหมุนขึงลวด",
"46fCSmt17w0,เผาโฟมอุดท่อพลาสติกรั่ว",
"kmTaBUTjWe4,วางระนาบปืนชี้เป้าหมายขณะเคลื่อนที่",
"ISw4x0nRZRs,แผ่นกรองอากาศรถ อยู่หลังช่องเก๊ะเก็บของ",
"84rXuGhZEY8,ไอน์สไตน์แลบลิ้นใส่นักข่าว",
"yfMPx1v86b0,ตัดขอบพลาสติกงัดเห็บหมัดดูดติด",
"5ywDkXFUnr8,จับเสี้ยมปูนใต้คาน",
"7efCoJwtxgA,จับขาล็อคขึ้นสูงให้เสียการทรงตัว",
"IUNXgiKgEPE,เสาไม้พลาสติกเกรดโครงสร้าง",
"lj2Cy5v3JTY,ตัดพื้นรองเท้ายางปั๊มลายไม้",
"XTRpH5S6lIY,เตะเจาะยางขาหน้านักมวยยืน",
"A8vn5JZuoeE,ยกเหวี่ยงทุ่มคู่ต่อสู้",
"LLmlbdpnfMQ,ขาตั้งเลื่อนย้ายมอเตอร์ไซค์",
"n0Qdaa4QlNI,ยกการ์ดป้องกันคางเสมอ",
"5_WYy7OREvo,เสียดสีไม้แห้งสร้างเชื้อไฟ",
"t0gHl2XDrgM,ลูกบอลใส่ท่อทำเช็ควาล์ว",
"YgsVyeqh86g,ตำลึงตัวผู้ กินแล้วท้องเสีย",
"_JqhH3e_sbg,พันใบอ้อยรอบลำต้น",
"-nSEnNI8C28,น้ำต้มใบมะละกอฆ่ามะเร็ง",
"YVq8LywPVvM,หมุนหลังสะบัดแขนตี",
"zDFKQmPsIuw,ไอแซก นิวตัน นอนวันละ 2 ชม.",
"Km0fbags_SA,ตัดจอบทำเกรียงหวีปาดปูน",
"X0Oz6_8YJGM,เทปจับยึดไขน็อตตัวเมีย",
"pkd9xkUJqJw,หนามซี่กันนกมาอาศัย",
"rHaFpbprL_k,ขาฉากยึดรางน้ำฝน",
"Ib0XXxI81Z0,สะบัดขาเตะวงใน",
"14-2JYmubnM,ลายม้าลายไล่แมลงวัน",
"qVF2FCpcss0,ตำแหน่งยึดสกรูมุมเฉียง 45 องศาให้สนิทพอดี",
"T7D10Y1Y2Sw,มดงานก่อกบฏฆ่านางพญามด",
"usoQupzfGR0,กวางเอลก์ผลัดเขา",
"wIswHqVM4-M,บานพับประตูทำมีดพับ",
"36jwWT1X6-8,เหตุผลที่พีทาโกรัสกลัวถั่ว",
"HocqiKPJ_As,ไขควงตอก แก้น็อตหัวเสีย",
"l-S4mZm82pI,มีดคัตเตอร์กรีดลอกฟิล์มรถยนต์",
"yS71jZxIbmA,เตะถีบทำลายขาหน้า",
"v6QV6yRQZIU,อบขนมปังบนกองฟืน",
"3t-Rlh2uGOc,กระโดดเข่าลอย",
"dWHPvLaxdOo,คว้าคนบังรับกระสุน",
"MOfiImnlUFo,JP Morgan ปล่อยกู้เงินให้แก่ฮิตเลอร์",
"GHHmer-WPgA,ต่อถังเพื่อเพิ่มแรงดันน้ำ",
"Jm9YXfSvuCc,ไม้เกี่ยวคล้องสายไฟในที่สูง",
"jNPew0pihSM,ฝาครอบเขาสัตว์กันขวิด",
"f92DH3Svk94,CPR โดยใช้จังหวะเพลง Stayin' Alive",
"1vMFucwq8EQ,ซ่อนไพ่ไว้ในอุ้งมือ",
"GMOWK9CL_cc,หล่อโฟมขึ้นรูปเบาะนั่งแข่งรถ",
"IWCHp9ykiSM,ศาสนาพราหมณ์เคารพศิวลึงค์",
"oDXVtuK_PRE,เข่างัดอุ้มยกของหนัก",
"ljvQRwNL2js,ไอน้ำในอากาศควบแน่นเกาะขวดน้ำเย็น",
"ysOkXzuD8EI,ยึดมีดหั่นโยกติดเขียง",
"m6rCOuJeLhk,อาหารอร่อยเป็นสิ่งพื้นฐานของการเปิดร้านอาหาร",
"RRUDeqnCwpU,แกล้งเจ็บให้ใจหายเพื่อนำพาไปจุดเซอร์ไพรส์",
"cbUlImgMFik,ยกขาคู่ต่อสู้จากพื้นม้วนหลัง",
"6X7yVTw7fqM,เขย่าขวดให้มดแต่ละเผ่าพันธุ์สับสนและฆ่ากันเอง",
"fwM6lmuvzfo,หลอกโจมตีให้ระบบสมองทำงานหนัก",
"0tYBVYcMRSM,ตีดอกเกลียวซ้าย",
"LY8j-gA-VSg,ชุดกลมเกลืนเข้าได้ทุกสถานที่ในเมือง",
"uwYkTRdwvXM,เทปกาวเหนียวลอกคราบเทป",
"ekfVX58ZflI,เลื่อยวงเดือนดีดถอยหลังตัดนิ้วขาด",
"Rvsv5yctu8c,สอดขอบทับพับผ้าปูที่นอน",
"e0e3v_--ORU,เปลี่ยนทรายให้กักเก็บน้ำในตัวได้",
"bhmZODKfP-A,เคลื่อนจุดตัวหารทศนิยม",
"9lN7XOErN_A,เจาะกระเพาะวัวเอาแก๊สออก",
"pM3tf_yeGVw,เงื่อน Prusik เลื่อนปรับระดับการรัด",
"qIsO4qBXik8,รถลากเข้าท่อ",
"qtbKU7byZh8,ให้คนดูอยากรู้เพิ่มขึ้น เพื่อจะติดตามจนจบ",
"In1jyK4V8uo,ยกเข่าหลอก เพื่อจะโจมตีท่าใหม่",
"7KPdpFHzI8k,ใช้โต๊ะฝึกหมาท่าหมอบ",
"XJCtBH3tGPU,ถุงพลาสติกยึดมือถือเข้ากับเคส",
"DP1iZLoGYJs,ตีงอหัวตะปูเป็นที่ยึดตะขอ",
"8R_t4_VGeR4,เก็บขอบมุมผ้าเทป",
"sWkENEnoLNY,ใช้มือควบคุมผู้ฟัง",
"Wa5A5a2Ov5I,ลูกมะพร้าวช่วยลอยตัวในน้ำ",
"zH5IroB8cUQ,เปรียบเทียบเศษส่วนมากกว่า น้อยกว่า ด้วยการคูณไขว้",
"0MmbnVs-l18,ตายภาวะปกติไม่เป็นโรค ถึงจะบริจาคร่างกายได้",
"cuPJggX2AAI,ตัวปรับระดับกระเบื้องปูพื้น",
"lzlBX2fGodw,ถุงมืออุ้งเล็บขุดดิน",
"D_3nZpgN-eY,มายยากลใช้สลิงดึงซ่อนของหลังเสื้อ",
"hEQEGMKgXCs,แอพป้องกันแสงสีฟ้าจากจอมือถือ",
"Rxr7dXeqe8Q,ดอกไขควงยาวทำงานใต้หลังคา",
"-Ypjo5TvI2o,ฝึกน้ำกระเด็นเข้าตา",
"EKjeDtOQNEk,ผิวของใบบัวป้องกันน้ำ",
"SLJjSk0dRY8,วงกลมโค้งสร้างแรงหนีศูนย์กลาง",
"nmF0At9ZcOA,ตีหินแม่น้ำจุดไฟ",
"yEg2CUyWBzs,เลี่ยงผ่าตัดใกล้สะดือสกปรก เสี่ยงติดเชื้อ",
"rX8sPhxpqW0,เคลื่อนตัวรอบขอบเวทีมวย",
"IRInguSwCPM,เคลื่อนตัวรอบขอบเวทีมวย",
"5gWfflQtMGI,ท่อน้ำต่อหินเจียร",
"2WKLjZnjN_o,ตัดวงกลมอุดปิดท่อ PVC ใหญ่",
"tLzeF9YnpQQ,มีดคัตเตอร์กรีดหนังดึงเสี้ยนไม้ตำฝังเนื้อ",
"106PPfcnQJg,ห้องพักราคาประหยัดใต้ดินในเกาหลีใต้",
"kB_9oAJnUEo,สูตรคูณเร็ว 21 ลัด",
"f-u42h12Y3k,ถังกรองดันน้ำออกเอง ไม่ต้องใช้ลูกลอย",
"kXNNSfXGO0U,ตดหลังผ่าตัด ถึงให้อาหารผู้ป่วยได้",
"AqzR0kpyt-I,คลิปนกตลกโชว์จู๋ในเสื้อโค้ท",
"trvuF5lxPPI,เตะช้อนขาให้เสียจังหวะ",
"GfwP1vEaTKs,สูตรคูณลัดแม่ 12",
"_3JyHwVZA_8,ยางต้นท้อรักษาโรค",
"xilM6wIFe5A,ใส่เสื้อสีอ่อนเลี่ยงยุงกัด",
"w-HFECI5V6k,ใช้โดรนตามหาสัตว์หาย",
"fMHM-dFacrg,โยกหัวหลบรูปสามเหลี่ยม",
"2GQtGB-G2RM,ท่ามวยผสานการ์ดยาวผสมการ์ดสั้น",
"WKrrpZ7EGY4,ทุ่นท่ออากาศลอยน้ำสำหรับหายใจขณะดำน้ำ",
"iPrYwPg_NtU,วิธีเจาะยึดสกรูแนวเฉียง",
"XsyH9U9lPRc,วิธีตั้งโซ่มอเตอร์ไซค์ให้ตรึง",
"mQuRJHKbEhs,เตะสวนหมัดตรงทันที",
"w3JxQJd7IBQ,ตัวจับหัวสกรูกับหัวดอกสว่าน",
"ArQBQqw9Jng,ส่งแรงขนาดเล็กแต่จำนวนมาก สามารถเคลื่อนขยับสิ่งของหนักได้",
"2U_t9NtftnU,พลั่วหนีบดินขุดหลุมเป็นรูหล่อเสา",
"wel4jY7wTos,ดามเหล็กประคองต้นไม้ใหญ่เข้าด้วยกัน",
"cITLQh4hO_I,พันเทปพันเกลียวพันตามซี่เกลียว",
"gx2gsf1Ai84,โดรนขนส่งของขึ้น-ลงบนเขา",
"nq8Dcf7BskU,กาวตะปูยึดติดผนังสมาร์ทบอร์ดเข้ากับโครง",
"9qKg-zTdIKA,โรคนอนเกิน (Hypersomnia) เป็นโรคที่หลับเกินพอดี",
"_ARm1pWj3hM,ย่อชกเพิ่มความแรงหมัด",
"JUEmtJYywPY,เจาะรูเสริมเหล็ก เพิ่มความแข็งแรงให้ต้นไม้",
"0QNDVQaFOw8,เทยางมะตอยไม่ต้องเสริมเหล็ก",
"UD4j4i6nXiI,ในศตวรรษที่ 18 แพทย์ใช้เหล้ารักษาผู้ป่วย",
"fv05CRICyGQ,เทย์เลอร์ สวิฟต์ หมอบหมวกให้เด็กป่วยเป็นมะเร็ง",
"74EhrGH9X50,องศาวางเท้ามวยไทย",
"qFGbz9kVK4U,ตลกชาไทยใส่ถุง",
"5CAm8Q_4RVU,ทินเนอร์เช็ดทำความสะอาดคราบน้ำมันเคลือบเหล็ก",
"4KSxaCCiOVM,รอกขึงสลิง",
"ZqzevfAwjm0,ใบตัดโลหะติดหัวสว่าน",
"sPiOdBaXYjM,เคเบิ้ลไทร์คล้องตัดเทปกาว",
"T47R_pqlc8A,มัดลวดต่อท่อสายยาง",
"us6VbZx8kqY,โซ่มอเตอร์ไซค์ใช้หนีบจับสิ่งของแน่น",
"fScZWZNfbEg,หมุนปรับองศาเข้าโจมตี",
"45JLV1g5eUo,ขันชะเนาะเสื้อห้ามเลือด",
"RD9Kp9338ks,เจาะท่อหลอดลมใส่คอ",
"FcPtvgaVl7I,เอียงตัวเบี่ยงออกหลอกระยะชก",
"Brli8OBX6dM,เว้นช่องเผื่อความดันอากาศในขวดน้ำ",
"-lCqruyvEGM,เฉลยมายากลซ่อนขวดในผ้า",
"WwG4gy0F4UQ,สีดำดูดความร้อน สีขาวสะท้อนความร้อน",
"2e-K0LlGstg,ไขมันดี (HDL) ช่วยลดความเสี่ยงต่อการเกิดหลอดเลือดอุดตัน",
"QTywpsMYTpc,หนีบดึงข้อนิ้วแบบถูกวิธี",
"tKJ05m2HitU,ระบายตะกอนเขื่อนกักเก็บน้ำ",
"tJM34CRsRno,ฝอยขัดเหล็กเคาะขี้แสล็กเชื่อมเหล็ก",
"74xNj3ELlN8,คลิปตลกนักรบไก่งวงไล่หมา",
"REAESVKKci4,ลิฟท์จอดรถในห้องคอนโด",
"L_H5Q-fjIU4,โหนโน้มกิ่งต้นไม้ลงจากที่สูง",
"bmEjC1TPkKE,ขั้นบันไดปูนหล่อสำเร็จรูป",
"xTvxpztkSRU,ถอนดึงขนทำให้ขนใหม่ติดอยู่ใต้ชั้นผิวหนัง",
"kwbjOWdbIaA,ฟองน้ำต่อแปรงทาสีด้วยตัวหนีบกระดาษ",
"D8jLXPd_9uo,เลื่อยญี่ปุ่นตัดมุมโค้ง",
"4EChoRueuv0,แม่เหล็กยึดรั้งหนังสติ๊กกระสุนลูกปราย",
"c6Ga24oZ0M8,เขียนในสิ่งที่สมองคิดมั่วๆ เพื่อสร้างไอเดียใหม่",
"S_2lAtLrOi8,กระโดดตีศอกหลายมุม",
"hcTwaywY05E,โครงเหล็กเสริมเสาปูน",
"XZ-8b4qipzE,หัวประแจปรับอัตโนมัติ",
"SzxQ40SkVUs,ผ่าเอากระโหลกออกลดแรงดันเลือดจากสมอง",
"fwXtIOUJU_w,สวดมนต์เพื่อเอาพลังจากคลื่นเสียง",
"d9fg96vi1TA,ตลับเมตรเรืองแสงใช้ในที่มืด",
"txE69cUlaHM,ตั้งราคาหลอกให้สินค้าดูว่าซื้อแล้วคุ้มค่า",
"MPdwl9uG3_0,ปั๊มผิวลายลูกบาสเกตบอล",
"ElPEwNHx3qI,ประกบน็อตตัวเมียยึดดึงเกลียวติด",
"zMrVCFghEX8,จะสร้างเทคนิค ต้องมีพื้นฐานที่แข็งแรงก่อน",
"-r80A6svZwQ,สร้างงานวิจัยอวยสินค้าตัวเอง",
"DNmlZ4kFyuM,เชื่อมหัวน็อตตัวเมียสวมเข้าหัวน็อตตัวผู้ที่เสีย",
"WRbkgST7tng,จินตนาการถึงภาพลอยอยู่ในน้ำเพื่อเข้าสู่สภาวะหลับลึก",
"9hfIaNaSTbs,ตะเกียงใช้หินแก๊สแคลเซียมคาร์ไบด์+น้ำ จุดไฟ",
"jmNuwnbtfw8,ชุดผ่าตัดแขนขา ยุค1800s",
"-ihQgrKxD3Q,นกฮูกกลืนเหยื่อทั้งตัว แล้วสำรอกออกส่วนที่ย่อยไม่ได้",
"Ub1odrqWB3Y,ดอกสว่านคาร์ไบด์หัวธนู เจาะได้ทุกอย่าง",
"mvw1wm6tj7Q,เก้าอี้ช่างไม้ล็อคเหลาไม้",
"Vmmd-sY8Y2c,จิ๊กไม้ผูกตะแกรงเหล็กเส้น",
"3YKT2AeevWs,พลาสติกแรปหล่อปูนเป็นหินก้อนกลม",
"dCPsLZg2Dhs,โกงวอลเลย์บอล ทากาวที่ลูกบอลให้จับติดง่าย",
"u51Fo_C47tA,กินแคลเซียมคาบอเนตตอนท้องว่าง ทำให้กรดไหลย้อน",
"YcNMdfVAmDo,ไขมันพอกตับจนตับแข็ง จะอาเจียนเป็นเลือด",
"asj_Ri1NZ_w,เครื่องหมาย CR-V ในเครื่องมือช่าง ใช้สำหรับงานหนัก สึกหรอน้อย ชุบโครเมียมเคลือบป้องกันสนิม",
"tONzkzcll-w,เข้าไม้คาน 3 ชั้น",
"hSW3ejcuysQ,เรียงอิฐให้ล้มวางเป็นแนวกำแพง",
"Mx2MEJ0KYEU,ใช้กล้ามเนื้อง่ามนิ้วโป้งกดนวด",
"APLtVOVncGE,แม่เหล็กจับฉากเข้ามุมเหล็ก",
"CsZrAOfkFx4,ไม้ฉากสามเหลี่ยมทาบเลื่อยวงเดือนตัดตรง",
"IxvLENrO148,โฮลซอเจาะฝ้าปรับระดับ",
"cTGqib_J4Ew,เกลืออะลูมิเนียม อุดรูขุมขนไม่ให้เหงื่อออก",
"VVC0aCzGTmE,เฉลยมายากลใช้เอ็นดึงช้อนให้ลอย",
"SuvZ9AHFPFg,เจาะยึดฝากระป๋องสเปรย์ยึดติดชั้น",
"2tpyW9NMklM,ลมทะเลกัดรูเจาะหลังคาเมทัลชีทเป็นสนิม",
"GpW-7wWq4p0,พันสายทองแดงต่อกันแบบแข็งแรง",
"OnYT5HxxUBk,เชื่อมแกนลูกปืนล้อให้หักเลี้ยวได้",
"hVWkWwyC96g,แก้วน้ำดื่มหมุนฐาน",
"8YEFA9aaDWo,เมื่อรถจมน้ำ น้ำจะดันไม่สามารถเปิดประตูรถได้",
"qjOAwQxw3BA,หลอกแจ้งให้ตำรวจบุกบ้าน อ้างว่ามีอาวุธปืน",
"njeTNqTfIxc,วัดตัดขาเก้าอี้ให้เท่ากัน",
"u6hYhQmVmCs,สว่านกระแทกเจาะเข็มเหล็ก",
"mEe0JmHxvaw,ดีดหลังเตะสองจังหวะ",
"A52vY_1hEPk,เสียบปลั๊กไม่แน่นเกิดประกายไฟ",
"Z2AFlQBwijE,ข้อเสียการศึกษาไทยคือไม่เน้นสอนทักษะ",
"52GLMQp52qg,กดดึงตะขอเบ็ดตกปลาเกี่ยวติดเนื้อ",
"0Y7kT-jnL_M,งูม้วนขดปีนขึ้นต้นไม้",
"Lg_NrkFUvIg,เฉลยมายากลซ่อนไม้จิ้มฟันไว้ในมือ",
"pW8NcCvOQOE,ความร้อนทำให้อิเล็กตรอนเกิดแสง",
"j2ltyqhrCXs,ปืนฉีดน้ำความดันสูงดับไฟในทันที",
"S0FScvuGUVg,หมุนเลนส์โพลาไรซ์ตัดแสงสะท้อน",
"Ck6RLC0FNnU,ตีเหล็กเส้นตัดอิฐมอญ",
"E7dgJpkGScs,ไฟฟ้ากระแสต่ำรีดพิษแมงป่อง",
"I-e_6i3kJ2w,เหลาไม้ทำด้ามจับลิ้นชัก",
"BAvR2z7YwjA,มีดคัตเตอร์อเนกประสงค์งานช่าง",
"lXQfrchPyPA,แม่เหล็กยึดเก็บเครื่องมือช่าง",
"aZyZJG8Do9s,พ.ศ.2325 ก่อตั้งกรุงรัตนโกสินทร์",
"6ty7mej-C2M,ติดถุงพลาสติกเก็บเศษเจาะฝุ่นปูน",
"LEtHxdT3tzc,นั่งลงให้ตัวเล็กลงป้องกันกอริลล่าโจมตี",
"7eB_HCugiB0,ดอกสว่านลบคมปลายน็อตเกลียวเสีย",
"RqCS2Pln_QE,ทำกิจกรรมซ้ำประจำเพื่อแสวงหาแนวร่วม",
"E1S9o-ad4V4,ทำกิจกรรมซ้ำประจำเพื่อแสวงหาแนวร่วม",
"bw-_o3QGK-E,สกรูปลายสว่านหัวหกเหลี่ยมเจาะนำแทนดอกเจาะ",
"Adxc1yoGZ0Q,ทีบเพื่อหมุนหลังเตะ",
"aeh0QutcTSA,สีทาทับหน้ากระเบื้องห้องน้ำ",
"CaCxvOaQWQM,สายรัดห้ามเลือด Tourniquet",
"pTtpETvvIK0,เฟรมท่อนไม้แบกกระเป๋าเป้สะพายหลัง",
"nru58NW4-8E,เผาไฟคลายเกลียวเหล็กติด",
"k39LzyIGMDE,บ่งบอกว่าดวงตาที่สามเปิดแล้ว",
"GFbrMOUVyj8,ดอกใบสิ่วติดหัวสว่าน",
"f8-w0lwmh9A,รับหมัดสองจังหวะแล้วค่อยเตะก้านคอ",
"LIhZw6cfwI4,ตะแกรงหมุนทำความสะอาดในถังน้ำ",
"V69Hf8JhpGE,เฉลยมายากลแทงดินสอเสียบติดนิ้วมือ",
"jeRPZq3UlPs,คีมปอกสายไฟอเนกประสงค์",
"BhxFtcseoY8,จงรักและเคารพในตัวเอง",
"zm9YnoGQflk,อะเคบิ ผลไม้ญี่ปุ่นหลายชนิดรวมกัน",
"ooNnN3S0cTk,ใช้จังหวะโทนเสียงนิ่งคุมลูกค้า",
"bC2ZMKijl_I,ข้อต่อโซ่จักรยานทำหูช้างยึด",
"xr0O6x7h5fU,นั่งคุกเข่ายืดเส้นฝ่าเท้า",
"V2t_Kewr-Fc,เมื่อโดนเตะสูงให้เข้าต่อยทันที",
"BZN4d4zWS7c,ตากุ้งยิง/ตาอักเสบจากมาสคาร่า",
"rEvdYrAp2vE,จิ้มหมัดแย็บเหมือนใช้หอกแทงให้สับสน",
"sedkU4cglzU,โยกตัวกระจายน้ำหนักรับลูกเตะ",
"ozYbRL1CAbY,ท่อยึดสายยางถ่ายระดับน้ำ",
"Dewrh7Sta3I,จิ๊กเชื่อมเหล็กรางรถไฟ",
"177-kDhsMNA,เฉลยมายากลเทน้ำใส่แก้วลอยได้",
"jFUWq3sbHak,ICP ทำธุรกรรมได้เร็วกว่า Solana 65 เท่า",
"rmPBKn1wJBk,ท่าประสานมือเตรียมใส่ Armbar",
"RwPAtGwuwOs,ใช้เหล็กเส้นแทนดอกเจาะนำยาว",
"fdJC5NJ6mGI,โครงสร้างด้านในบันไดเลื่อน",
"tf6yiLPkujk,รวมมือถือจำนวนมากหลอก Google Maps ว่ารถติด",
"0RhaDaxyUvo,ดัดฟันหน้ายื่นผิดรูป",
"8KQQyEpUdAQ,จังหวะก้าวเท้าหลบยิงปืนเข้ามุม",
"Lua2avoL_5c,เชือกโยกแนวเฉียงขยับรูปปั้นหินโมอาย",
"nnazMEffOy0,ว่านตะขาบแก้พิษตะขาบต่อย",
"NP49mtaAZHU,สร้างธุรกิจที่พฤติกรรมคนจะไม่มีวันเปลี่ยนแปลง จำเป็นต้องใช้งานตลอด",
"0jCsLrdYE_4,หินขนาดใหญ่กั้นคลื่นทะเล",
"gjHVdjTLHvY,แคะหูทำให้ขี้หูอัดตัวจนอุดตัน",
"rBVgUHpxo6E,เฉลยมายากลกัดไพ่ขาด แล้วเป่ากลายเป็นไม่ขาด",
"709dyf5d5UM,แกนเครื่องจักรหมุนตัดหิน",
"IcKcQRZJebk,เครนยกส่งของข้ามฝั่ง",
"cZppR1A5z8w,ไขว้ประแจงัดคลายเกลียว",
"lhxjybg6mb8,แขนยืดยาวต่อรถเครน",
"A60wSANwp3w,ไขน็อตยึดโซ่ยึดจับชิ้นงานแน่น",
"rwpGqK3kE_0,พูดแล้วหยุดจังหวะ 3 วินาที ให้สมองผู้ฟังใช้เวลาคิด",
"w15p8ymX97k,โครงสร้างลูกกระสุนปืน",
"0ZaN38EMXIU,สลับขาหลอกเตะ-ต่อย",
"Y5O5XhD-zMU,จ่ายยาชุดอันตราย ตามคลินิกต่างจังหวัด",
"tQALB1_mM3w,ตัดท่อ PVC แขวนยึดประกบไม้",
"RBec1UXPi40,ตรึงยึดเหยื่อติดตะขอเบ็ดตกปลา",
"NFj9TCoI0GI,เชื่อมเหล็กเป็นคีมสปริงจับสิ่งของ",
"WtGx8kzSWkk,โซเดียมไบคาร์บอเนต ลดความดันโลหิตสูงและหลอดเลือดตีบตัน",
"uwNhap0RwOI,แกลลอนน้ำมันทำที่เก็บเครื่องมือ",
"QYIl8x7wneo,งัดสกรูเกลียวหลวม",
"8GDZFaCtiyk,สารแคปซีนในพริก หลอกสมองให้รู้สึกว่าร้อน",
"yHqsdqs8Q24,ญี่ปุ่นเข้ายึดไทยในสงครามโลกครั้งที่ 2",
"LQNb7ObfW98,แผ่นครอบข้างหลังคาเมทัลชีท",
"WA26YZMPjMA,ความร้อนเป่าท่อยาว จะทำให้เกิดเสียง",
"6IYR0fjlFLQ,นั่งร้านก่อสร้างแบบพับเก็บได้",
"or2Afledib4,แผ่นไม้เสียดสีสำลีติดไฟ",
"n4i5tvws4ZI,ออกแบบเก้าม้านั่งป้องกันคนจรจัดนอน",
"J1GwMG2ImB0,ชั้นใต้เปลือกโลก",
"Gzy8CkX1SvY,หินออบซิเดียนคมบาดผิวหนัง",
"eyixdwVTLx4,ข้อต่อโซ่จักรยานยึดหัวสลิง",
"YdU1q16yheI,บิดมัดลวดให้แน่นมาก",
"b9qcvn_rokA,หัวต่อสว่านตัดแผ่นโลหะ",
"JRDwWJdtfdI,วิธีทำให้อารมณ์ดีแต่เช้าเมื่อตื่นนอน",
"nwMXtZ94HRA,เด็กทารกจะมีหางเมื่ออยู่ในท้องแม่",
"Ux2cB7TB6NM,แบมือป้องกันลูกเตะขมับหัว",
"HbP4xZG3fI4,เทศกาลปามะเขือเทศสเปน เกิดมาจากการทะเลาะกัน",
"-rkGdvtBfMs,โมเตล(Motel) เกิดขึ้นเพื่อรองรับนักเดินทางบนรถ สะดวกจอดเข้าพักทันที",
"JuFgXGPuX9Y,เฉลยมายากลถูแล้วควันลุก",
"aEyK4qLjEZc,แปะเทปผ้าเจาะนำเหล็กกลมไม่ลื่น",
"eL_m1d96A_o,ตัวถอดตลับลูกปืน",
"trjkDJA60V0,ฟิล์มลอกแปะหน้ากากหลายชั้น ป้องกันฝุ่นละอองและสิ่งสกปรก บดบังการมองเห็น",
"llHloqYrwUE,สกรูติดประแจไขล็อคฝารู",
"rfbbk1gmzYs,นกเลขานุการ แรงเตะรุนแรง 6 เท่าของน้ำหนักตัว",
"imRi719-c7o,เฉลยบีบหลอดยาสีฟันย้อนกลับไปมา",
"-wJVG3cW7Ao,พระพุทธรูปล้านช้าง  เป็นพระพุทธรูปศักดิ์สิทธิ์คู่บ้านคู่เมืองของลาว",
"Tt0zZFs4NE0,ชุบแข็งเหล็ก โดยเผาไฟจุ่มน้ำมันเครื่อง",
"jVyWXXFbqSc,พุกเหล็กหัวตะปู",
"ObIBWPu3IN0,เทลูกบอลปกคลุมกันน้ำระเหย",
"kOfAInE6hjw,เมืองเชชเนีย ทรมานผู้ที่เป็นเกย์",
"DdlnfKVlm0s,เหล็กโค้งจับลูกดอก",
"xRkqk19llpY,คลิปตลกเป็ดกำลังจะออกไปเล่นน้ำ แต่ฝนดันตกเลย อด",
"Tu9aZOry3_0,สนิมผิวเหล็กเทปูนทับได้ สนิมจะไม่ลามเพิ่ม",
"3_bfNN6M-q0,ก่อเตาอิฐย่างอเนกประสงค์",
"MSjQ63bL7DU,ส่วนประกอบโครงสร้างหลังคาปั้นหยา",
"V2COgo-eIBo,เผาเหล็กใช้ท่อเหล็กแป๊ปกลมดัดงอ",
"KyzQqnqaJPA,ผ่าคลอดต้องผ่าชั้นผิวหนังทั้งหมด 7 ชั้น",
"YpG6GK9y8s8,ไก่ผสมนกพิราบ",
"VbdoidRywyY,ตีเข่าให้เหมือนเอาหอกแทง",
"ekYLnWfHOH4,เงื่อนผูกดึงยกของทรงยาวขึ้นที่สูง",
"6eGO5B0Zvqw,ดมยาสลบในห้องผ่าตัด",
"_qMIpAXx-Vs,บีบไหล่ประคองพานท้ายปืน",
"j9tLu23AJ2Y,กินแคลเซียมคาร์บอเนตเสริม จะเป็นหินปูนเกาะตามหลอดเลือด",
"azGBk9sWyrw,กดจุดคลิตอริสเย็ด ให้ผู้หญิงถึงจุดสุดยอด",
"U2gvAUKj_kI,ไม้วัดระดับน้ำแบบพับข้อพับเข้ามุมได้",
"8DuZi78Yfe4,มดดื่มน้ำหวานเปลี่ยนสีตามน้ำที่ดื่ม",
"--3CuNYFMME,กลอนล็อคหูช้าง",
"zl3x5Q2Cy4Q,เฉลยมายากลมือโผล่ในกล่อง",
"6ynYYdOmxPc,เขียนหนังสือเพื่อเป็นเครื่องมือนำทางผู้อ่าน",
"SIo9FHT08jM,ถุงยางอนามัยโบราณทำจากไส้สัตว์",
"rP5OMrPl_a8,สวมน็อตตัวเมีย 2 ตัวประกบไขเกลียวติดแน่นไม่ออก",
"r8Zz7ZuNa8I,ยิ่งล้มเหลว ยิ่งทำให้เก่งกาจ",
"xbzUznzK6Qg,เงื่อนมันท่อสำหรับไว้ดึงลาก",
"gApxksYrZ7M,เปอร์เซ็นต์โอกาส 51% โยนเหรียญแล้วออกเป็นหน้าเดิมออกหัว-ออกก้อย",
"P1dJbaBrzEY,เล่าเรื่องด้วยภาพ คนจะจำได้ 60%",
"W-6JqvLf_Yc,เปลวไฟ ตรวจสอบจุดที่ไฟฟ้าแรงสูงรั่วไหล",
"itGIMjv-CLg,ตัดฝาถังปาดเกรียงโป๊ว",
"C_lm5Si34XU,อารมณ์เหมือนน้ำที่ปนเปื้อนจนขุ่น ทำให้บดบังทำเรื่องที่ผิดพลาด ต้องอยู่เฉยๆรออารมณ์จางลงเองแล้วค่อยตัดสินใจ",
"pRHXul0RWDg,ปิดปาก กลั้นหายใจ แก้อาการหูอื้อตอนขึ้นที่สูง",
"UNZHFE56QHg,นอนย่อขดลำตัว",
"7RFr8grgSQM,อ่านค่ามิเตอร์น้ำ หน่วยลูกบาศก์เมตร หน่วยลิตร  ดูใบพัดเวลาน้ำรั่ว",
"e2aALELgCw4,กลอนประตูแบบไก",
"ylM1AY3B5a4,กรีดยางมะละกอส่งแปรรูป",
"7FhoXRDi5LM,ตะไคร้หมักเหล้าขาวไล่แมลงวัน",
"T_ABO21ABc0,สลับมือจับหูกับจมูก ทำให้ประสาทสับสน",
"96sU3GHb_58,ใช้ไม้ประกบกันทำเป็นฉากเจาะนำให้ตรง",
"Dhsr81img7U,ชุดต้านทานไฟฟ้า",
"ArH_C7ejkV8,พระธาตุประจำวันเกิด",
"j3qoJpusXh4,ฝนตกช่วยให้ชั้นดินแข็งแรงไม่ทรุดตัว",
"bXZ-k1xO79o,ใช้นวมใหญ่ทดสอบความเร็วหมัดชก",
"kkr2UbQeT1g,ตับห่านฟัวกราส์ ทรมานสัตว์บังคับให้ตับห่านเป็นโรคไขมันพอกตับ",
"jGRs2-C7rY8,นกเพนกวินขี้เรี่ยราดไปทั่ว",
"roaOLjXAbSc,เลื่อยหัวน็อตเสียให้เป็นเส้นตรง แล้วใช้ไขควงหัวแบนไข",
"9ELSr7tjKdA,ตัดปลายโครงซีไลน์เข้าฉาก",
"zkM-k4ywFxA,มุกตลก ยายหูหนวก",
"PBqN7cgt2MM,ฉีดสารพิษโบท็อกซ์ ทำให้กล้ามเนื้อเป็นอัมพาตลดเลือนริ้วรอยชั่วคราว",
"KD2Ggx2Vsto,คล้องเชือกลากท่อ",
"ahjps5DjZDs,ผ่าตัดไส้เลื่อน",
"v2xLHyUjJXI,กรดในร่างกายสูง ทำให้กระดูกพรุน",
"hLDRIjqiYmQ,ยางรถยนต์ยกส่งของขึ้นที่สูง",
"Iz9bAvZ4VxE,เฉลยมายากล เหรียญหายที่มือ",
"q6M7hK5OoD0,ถ่ายน้ำหนักเท้าเป็นรูปสามเหลี่ยมเพื่อโจมตีแรง",
"ZBY3ofU-agU,จุดมุมเล็งยิงปืนตรงข้ามทางเข้าประตู",
"IXYiuHkvtYs,TOI 700 e ดาวเคราะห์ขนาดใกล้เคียงกับโลก",
"jW9Ir4Yi8jM,คิ้วอลูมิเนียมเก็บมุมเหลี่ยมกระเบื้อง",
"sfnFQ-RLick,ประกบเลื่อยเป็นกรรไกรตัด",
"66hhV7Q4Qq4,ฮัมเสียงตัวสะกดเพื่อหาเสียงที่เพราะที่สุด",
"KixhkKuACy0,อบผิวขนมปังกรอบ โดยทาน้ำมันเคลือบผิว",
"KyDMDcc9SQc,ปุ่มอากาศหมุนเวียนภายในรถ ไม่เปิดรับอากาศใหม่เข้ามา",
"kLvOyx1bJys,แกนกระเป๋าเป้ปรับลดการกระจายน้ำหนักเมื่อเคลื่อนไหว",
"5m0ZY6gFvkg,คลิปตลก นกเหยี่ยวบินลงมากินอาหารดินเนอร์",
"hhu-geFxPgg,รถขุดบุ้งกี๋หงายตักหน้าดิน",
"eUW3X0oel7k,คลิปหนีบกระดาษหนีบขัดกระดาษทราย",
"rp0kg6ZeRi0,เมล็ดแอปเปิ้ลมีสารไซยาไนด์ปริมาณน้อย",
"IWzuVOQY7Ic,เตะแล้วถอยกลับระยะปลอดภัย",
"AHBKoZbuJNQ,รมควันเนื้อ ใช้ใบไม้กักเก็บควัน",
"fzutRwGBVHs,แป้นบีบขึ้นรูปเหล็ก",
"_C4nHEEqN98,หัวลูกแก้วปิดปากขวด ชักตักน้ำขึ้นที่สูง",
"bZLmtmq-F5M,เครื่องบินปล่อยระเบิดเด้งบนผิวน้ำทำลายเป้าหมาย",
"aolPAiif4IQ,ทดลองระบบย่อยอาหารยุคแรก",
"FBRjPdIg4-0,คีมติดปุ่มกระดุมสแน๊ป",
"H3ZxZvo2cQ4,ระบบการทำงานของแก้วหูรับเสียง",
"4tQsbffIga4,เจาะปูนแข็งติดถังโม่ปูน",
"x2TikSzvB0Y,จิ๊กติดนำหัวเลื่อยวงเดือน",
"itT7WuoqRn4,น้ำลายเห็บหมัดและกลไกการป้องกันเลือดแข็งตัว",
"lIYc6VEZFiM,ตีหัวตะปูคลายสายเคเบิ้ลไทร์",
"XZGJfM93Fik,แกนไฮดรอลิกยืดกล้ามเนื้อ",
"USDy24H9gkY,นอนที่มืดและเย็น ร่างกายจะหลั่งโกรทฮอร์โมน (Growth Hormone) ดีที่สุด",
"op0Ux5AHAp8,เทปทองแดงป้องกันหอยทาก",
"m6dhJBLjBPY,โครงสร้างบันไดลอย",
"fgSRzs5AAow,ปลูกต้นหอมในขวดถังครอบกันแมลง",
"2fXq8O3osaM,ปอดพังจากสูบบุหรี่ไฟฟ้า",
"_-IFeBUdyGw,งอข้อมือเกี่ยวล็อคคอมวยไทย",
"5GTVjVs-Ys8,ต้นบุก",
"fr2PY9Vf82A,การทำงานสวิตช์ 2 ทาง",
"r-SF2OqC_4w,กลิ่นหอมของเด็กทารก ป้องกันเชื้อโรค",
"T_KlmRtjjbg,ฟันคุดทำให้ฟันอื่นล้ม",
"qhnHsP7YgBw,ตัวอย่างภาพไขมันพอกตับ",
"BO-nNTcV2JM,ไกตะปู",
"LRdsriopQ5w,ทำให้ขี้นิ่ม ป้องกันริดสีดวง",
"8dIiLinxAhM,ฉีดสเปรย์โฟมอุดช่องโหว่หลังคา",
"AcW8Tf6QBh0,โครงล้อจักรยานทำคันธนู",
"6aRaUOH1RD4,ผ้าดำกั้นแสงสะท้อนกระทบวัตถุ",
"hDJ1nB4S9_8,สลิงโหนตัวเชื่อมเหล็ก",
"n6OdqCGGGGk,คว่ำฝาหม้อกลั่นน้ำ",
"2O7tN7h8kU8,สารเมลาโทนิน ช่วยให้นอนหลับ",
"wagjIdygN10,ถมหินใหญ่รองพื้นรับน้ำหนัก",
"p2irdUQ99GI,กรีดซ่อนของในรองเท้า",
"xp9Y3XyrcAo,จี้อาร์กอนผ่าตัดปิดแผล",
"-AR0yNOmwHs,สารหนูทำลายหลอดเลือด",
"mhWL1UeZ5NM,ยาลดกรดยูริกรักษาโรคเก๊าท์",
"iAaP2PSjE9c,ผ่าเหล็กท่อนเชื่อมด้ามมีด",
"BZQuxFKVCZk,มัดเชือกหิ้วขวด",
"1LlMfT-UqJU,ขัดขาทำลายจังหวะขณะก้าวเท้า",
"AsLn40BxWkY,เทปกาวเหนียวอุดรอยรั่ว",
"OkimTrbTz3o,เครื่องแสกนหนังสือทีละหน้า",
"DT2Mv0XN4tE,เครื่องตรวจสอบระบบไฟฟ้ารั่ว แบบเสียบหัวปลั๊ก",
"E7e3hPSkmAY,ลูกช้างเดินได้ 1 ชั่วโมงหลังคลอด",
"NHH3knmVADk,ตั้งแผ่นผ่ามุมเอียง 45 องศา",
"AfPQTlg1TaM,ส่องกล้องคีบกระดูกไก่ติดคอ",
"z7jLZ81FpNY,หัวเราะเมื่อถูกจั๊กจี้เป็นกลไกป้องกันตัว",
"UrYGPFb00fU,ฉี่บ่อยตอนกลางคืน บ่งบอกเป็นโรคเบาหวาน",
"AiG5wSQqAQ4,นกอินทรีล่าหมูป่า",
"e0Bm_IpxaV0,ค้นพบดาวพลูโต",
"4BMm1ZwLDQ8,ใช้หญ้าผูกมัดปากถุง",
"IIOjEMnAuNE,สปริงเคาะตอกนำศูนย์",
"9IRmzZ1aoK0,โครงการ Midnight Climax แอบถ่ายคนเอากับกระหรี่เพื่อเก็บข้อมูลหาข่าวจำนวนมากกับแบล็กเมล์",
"Vl_tiKei0As,ผ่าหดท่อ PVC ให้กลายเป็นข้อต่อ",
"L03x1xiNH5U,ค้อนหงอนหมุนลวดแน่น",
"Z1bd_wumUH8,สร้างเขื่อนกั้นน้ำปั่นไฟฟ้า",
"Lanipl2BCaI,ดึงดูดพลังงานมาจากการใช้ความคิด",
"LFiWCKVI42M,แตงโมใกล้เน่าผ่าแล้วจะมีฟองระเบิดออกมา",
"qFIGG69yQKs,ดีดแรงจากขาขึ้นเชิงกราน แล้วส่งพลังมาที่หมัดชก",
"3aGifiQuuO4,จับล็อคขาหิ้วปีก แล้วตีเข่าเข้าท้องน้อย",
"BG5N1NhgfPs,นม+น้ำส้มสายชู กลายเป็นชีส",
"MJvtIgAl7m0,ใช้ผ้ารองตักทุบเศษแก้ว",
"qRGYAQUOKcE,สวมชุดสีส้ม ช่วยให้เห็นได้ง่ายในที่เปิด",
"8zdA0_hJoTo,ดัดโค้งไกสปริง",
"7qiK2UJMO_Q,หมู่บ้านหลอกในเกาหลีเหนือ",
"SCAt9Gk_kdM,รดน้ำละลายลิ้นแข็งติดเสาเหล็ก",
"SrWkQ8aXYyQ,ลอยตัวกลางทะเล",
"VlsJAVJFT14,ดอกต๊าปเกลียว",
"nSXriZ6G-r8,ดนตรีช่วยให้ฝังความจำแม่นไม่ผิดเพี้ยน",
"IDq1qVg0PT8,โทมัสแอลวา เอดิสัน สร้างเก้าอี้ไฟฟ้าประหารนักโทษ เพื่อให้คนกลัวไฟฟ้ากระแสสลับ",
"Mody1lE2UeQ,แมวคาบอาหารมาจีบกัน",
"CewIRDYztGU,จิ๊กแผ่นเหล็กสร้างลายเกร็ดมังกร-พญานาค",
"0qDv1pLi2XI,แคลมป์สปริงจับเข้ามุมฉากชิ้นงาน",
"TtMB-UktV9Q,ดอกถอนเกลียวซ้าย ถอดเศษก๊อกน้ำหักคาท่อ",
"-QG0ayZL5Qg,เลื่อยวงเดือนผ่าเสาไม้แนวดิ่ง",
"5kuSpQjzBsY,คัตเตอร์หมุนตัดท่อ",
"VuM0VeG45kI,เผาเศษถ่านเป็นเชื้อไฟเก็บฉุกเฉิน",
"7OSV7WF9D7w,ก้อนมะเร็งขึ้นคอ",
"9oMbHcQSbDk,คัตเตอร์ตัดท่อทองแดง",
"U_EfHYoweLk,ตัวห้อยหลอดไฟยึดบนฝ้า",
"ONfHktst0AM,ส้อมจิ้มดินป้องกันแมวมาฉี่",
"uToNp_QwDEo,เผาท่อ PVC ต๊าปเกลียว",
"D4d9nMeTtEY,เสาหักระเบิดเพราะในปูนไม่มีหิน",
"4wfKbZj4k0M,คราบแบคทีเรียสีชมพูในห้องน้ำ",
"-cKjZIu8PMY,ยางรถยนต์สวมในกระสอบทรายต่อยมวย",
"GdnoCUTg6po,คลิปตลก นกซิทอัพออกกำลังกาย",
"oNEhtyiutaw,จับตวัดขายันจากพื้น",
"5v_LH1tmJDU,รัดคอหมา",
"e4drvd_11bI,หินเจียร์เล็กไร้สาย",
"QaF4c88Fty0,ทิชชู่ห่อเก็บผักในตู้เย็น",
"sNWIVEF8kJo,เครื่องเก็บใบชา",
"QAWnEVa9vmw,แอโรเจลเคลือบผิวหนังกันน้ำ",
"52L0JvZ9LGM,ยางรถยนต์รองกันกระแทกตกแตก",
"nB-wyy6O7zE,สูตรคำนวณขนาดห้อง : BTU แอร์เครื่องปรับอากาศ",
"O8-T42SXkwU,น้ำส้มสายชู+น้ำยาล้างจาน ฉีดกำจัดป้องกันมด",
"6VPwz1M2S1Y,ใช้ขนแมวขนหมาเป็นพื้นหลังถ่ายรูปสินค้า",
"6Hekv_tF6lk,ดอกบานขยายท่อทองแดง",
"aU9hxihwwd4,เฉลยมายากลเป็นโค้กกลายเป็นน้ำเปล่า",
"4uBcpvolrto,กรีดขอบพื้นปูนตอนเทเสร็จใหม่",
"-bMJzN89BA8,ไม้ม้วนแคะขี้หู ป้องกันขี้หูอัดตัวอุดตัน",
"rhq0aC6PvnM,เชือกมัดจัดปากขวด",
"WyVInzEUx_s,ใบหินเจียรแตกกระเด็นเข้าหน้า",
"7CUgXMVf4gw,น้ำมะนาวลบหมึกปากกาไฮไลท์",
"-fPfwrGxKeE,ใช้หัวพ่นน้ำและหัวเป่าลมในครั้งเดียว",
"26i2naaz9k0,เหล็กดูดลูกปืน แบบ 3 ขา",
"S8ScBUAHn2Q,ตั้งชื่อชั้นจอดรถเป็นตัวย่อ",
"e1AExCpjJ8k,ต้มใบแมงลักลดความดันโลหิตสูง",
"_BvROf2D1so,ฉายภาพในสมองให้หลั่งสารเคมี",
"KsOgvtJYPNI,แรงโน้มถ่วงหยุดรูน้ำรั่ว",
"k_f4lRtYQ14,เพิ่มโทนทำนองในประโยคพูด ให้ผู้ฟังจดจำใจประโยคนั้นได้",
"URkLnyQiVCY,กาแฟผสมน้ำตาลเขย่าเป็นฟอง",
"a_BpSV3hu-Y,ปิระมิดบูชาเทพเจ้าคูคุลคาน",
"q39Y71CaMzA,มันสำปะหลังดิบมีสารพิษไซยาไนด์",
"rJVlnjj-HOQ,ต่อยตับน็อคคู่ต่อสู้",
"uON9RM-YtNw,เครื่องดัดแผ่นเหล็กเป็นกรวย",
"wn6DGYZmAz4,เก้าอี้คอมปั่นจักรยาน",
"751bXDuc54w,ขวานผ่าร่องไม้โค้ง",
"LOi4rrHX1MA,กาวตะปูติดกระเบื้องผนัง",
"2yMSsueajvg,รถแม็คโครปีนขึ้นเนิน",
"Tp6sX6z8pp4,หลุมกรองน้ำข้างแม่น้ำ",
"0JsjHBZA-uM,ออกกำลังกายท่าเดินเสือ",
"-FNJQg-0IUA,ม้าทหารรักษาพระองค์ป้องกันตัวเมื่อคนเข้าใกล้",
"CqsNANSJnIQ,ใช้ปลาดูดกำจัดเซลล์ผิวหนังที่ตายแล้ว",
"33oMvG9C5wY,เตะเขี่ยขาทำลายจังหวะ แล้วเตะก้านคอ",
"sG9_8w2Sgz4,หลอมท่อ pvc สวมหัวน็อต",
"kRYej_qhg0U,คลื่นเกลียวพยากรณ์ราคาบิทคอยน์",
"DfRbyfGyJCo,ใช้เศษไม้ยึดแทนพุกพลาสติก",
"wIzVj5N0eQI,คอมเพรสเซอร์แอร์กระชากกินไฟเยอะ",
"3QzSPV8mdlw,สิ่วตอกเปลือกไม้ออก",
"ZQaneAK130Y,เครื่องดัดตัดเหล็กเส้นไร้สาย",
"KWQl57GICTU,เงื่อนตะกรุดเบ็ดรัดยึดจับสิ่งของแน่นปลอดภัยมาก",
"3qawSyOXB1s,แว่นตา AR สร้างภาพสามมิติ",
"_vYyFqw4AXQ,ขับรถออกจากช่องให้พ้นตัวคนขับ ถึงจะหักเลี้ยวได้",
"0VtdAYnYC6k,เจาะแท่งเหล็กหมุนพันลวด",
"Nnt2Gg5EfM4,เศษโฟมอุดช่องว่างปูนแตก",
"_yQybzYvKlE,สปริงดัดท่อ PVC",
"-ZjXCs-iTe0,อาหารใหม่ดันขี้อุดตันในลำไส้ออก",
"1tEm2e1WrTs,ลาพรวนดิน",
"qQEwpiYVA-E,เฉลยมายากลมือเด็กออกจากท้อง",
"CJlpmFpX0AI,สีดำทามุ้งลวดให้มองเห็น ลดแสงสะท้อน",
"mZIm3CsQvls,สีดำทามุ้งลวดให้มองเห็น ลดแสงสะท้อน",
"fH1qS4d5_LU,มาม่าผัดกะเพรา",
"Wy75S89G8Po,แข้งล่างเตะกระดูกแข้งบนจนหัก",
"zmVdPubrZJQ,หลับแล้วกระตุก เกิดขึ้นขณะกำลังจะเข้าสู่ช่วงหลับลึก",
"BVTm6jYgs-k,เครื่องบินขึ้นหัวชี้ฟ้า จะร่วงตกลงมา",
"-r6SzUdmcyc,อะโวคาโด ติดผลใน 3 ปี",
"rxj2kUrTeRk,เก้าอี้ดีดตัวของนักบิน",
"ZDgpVA2OjCM,เป่าลมร้อนขวดพลาสติกครอบหัวท่อ",
"rWRYU7-6HUA,ร่างกายย่อยทองคำไม่ได้",
"cJ-jt3-_uWU,ข้าวผัดปลาสลิด",
"qVPC7NXzxI8,ปลดล็อคประตูท้ายรถในรถ",
"OIpX2WAZIDA,หัวแปลงหินเจียรเป็นสว่าน",
"fDBN-UnJV4E,ไม้แขวนเสื้อห้อยแกนกระดาษทิชชู่",
"_zYxHU8JWbg,มาม่าผัดซอสโหระพา",
"U51JF186D-c,ไม้คานกว้านเชือก หลักการเดียวกับที่ใช้ในระบบ winch ของรถยนต์",
"ne7jS5vreN8,เด้งยางรถยนต์ขึ้นกระบะสูง",
"JdeS4l8ROEM,เขี่ยขาเตะก้านคอ",
"qCsqiOVk6h0,อินทผลัมกินนิดเดียวทดแทนอาหารทั้งวัน",
"byNyR6_tBFI,หัวแร้งบัดกรีไร้สาย",
"V_OaugDFV94,แผ่นพลาสติกรองหล่อเทปูนเข้าแบบ",
"SXnjxk8wkmE,น้ำยาซ่อมกระจกร้าว",
"pf6qC2y0gdU,เฉลยมายากลกินสัตว์เข้าปาก",
"d0AhrMhBgW8,ยารักษาโรคเบาหวานกลุ่มซัลโฟนิลยูเรีย(Sulfonylurea) ทำให้ไตวาย",
"_QrA8nwW1cI,ล็อคที่โหนมือรถยนต์",
"yxmy-E0mZRA,ไม้ขีดไฟฟอสฟอรัสกันน้ำ",
"PXWtpYnfMmA,เลียนแบบท่าทางตามให้คนชอบ",
"BHq2yf4Zork,เฉลยมายากลซ่อนเหรียญไว้ใต้นาฬิกาข้อมือ",
"4lGxs-U6pq0,หัวยิงรีเวทต่อสว่าน",
"QSNgs4xTwI0,นอนตะแคงตัวดึงรั้งแขนคู่ต่อสู้",
"yPT1TBZ1u88,โยกหลบแล้ว uppercut",
"rQ_XZuEUsPI,เครื่องดูดฝุ่นต่อขวดดูดน้ำขัง",
"3nN53SHG0GA,ปากขวดแก้วลับกรรไกร",
"jPitAhNxJ6g,กินยาลดไข้ทำให้ตัวเย็น",
"7SLvPEX0of8,ถูกจับเผาเพราะใช้ความรู้หักล้าง",
"W5xOCDDGCug,ตัดหัวขวดน้ำทำก้ามปูยึดของ",
"s0l6yuFvFL8,ทุเรียนทำให้เหล้าเป็นพิษ",
"Y2nojP2ZDRE,หมุนหัวไหล่กันหมัดชก",
"Jegs8Fg8NoY,เกลือแร่ก้อน อาหารเสริมบำรุงให้วัวเลีย",
"8V_MforopzQ,ยกบ้านให้สูงกว่าระดับถนน",
"hNKCv8sQhPw,ผู้หญิงมียูริกสูงทำให้เป็นโรคไต",
"F1TvYNcpIzM,เครื่องเจ็ทนำทางตอนดำน้ำ",
"09UphwxlFb4,คลิปหนีบกระดาษเป็นไกปืนยิงหนังสติ๊ก",
"imPKpoxMoMk,เบิ้ลไม้คาน 3 ชั้น",
"JUVkuHasRNg,ชกเป็นจังหวะเสียงกลอง",
"E7pGr7dCdiA,ในอิสตันบูล รัฐบาลมีนโยบายดูแลแมวจรจัดทั่วทั้งเมือง",
"KwcNBo7SsbU,เฉลยมายากลงอนิ้วหาย",
"K23NvJwhHno,เผางอเกลียวเพื่อบิดออก",
"sGFHVoK7NcA,ทรมานโดยให้จ้องเข็มนาฬิกา",
"m8NQBsCeNXo,งัดเปลี่ยนหัวบิดก็อกน้ำ",
"_cPqnVahtPk,วิธีผูกเนคไท",
"EFrKZ_wiH0E,น้ำยาลอกสี",
"APpFFLaiU14,ผู้ช่วยนอนยิงปืนประกบ ป้องกันเหตุฉุกเฉิน",
"LxPJW6hioRk,แว่นตาเลนส์โพลาไรซ์ใส่หาเห็ดในป่า",
"lgD_n08ZHN8,ยิ่งอธิบายให้ผู้อื่นเข้าใจง่ายที่สุด เราจะจดจำสิ่งนั้นไม่มีวันลืม",
"ciqjDuhnDYI,เฉลยมายากลเสกเหรียญเข้าใต้ขวดแก้ว",
"zOjju2rLx68,ไข่เจียวกุ้งผัดพริกเกลือ",
"j0a9b3VbicE,แยกผลเมล็ดมะม่วงหิมพานต์",
"XDSwJZJx8pk,เคี้ยวหมากฝรั่งหลอกระบบย่อยอาหารให้ทำงาน",
"gjwNY5wg4lM,เพนท์พ่นสีหญ้าเป็นภาพวาด",
"GAZJkxiI1N0,เผาลูกแก้วความร้อนสูงจะกลายเป็นผลึกแตก",
"gC_0dBbhq6k,ผู้หญิงผอมเมื่อหมดประจำเดือน จะมีโอกาสเกิดกระดูกพรุนสูง",
"S1Jx4zqhbvE,ลากซ้อนรถเข็นปูน",
"a31rIWfMRmQ,เศษโครงคร่าวทำก้ามปูยึดโครงคร่าวอลูมิเนียม",
"C14Q8Z0GLg4,พริกป่นเกิดเชื้อราอัลฟาท็อกซินก่อมะเร็งในตับ",
"2Be-Kxrg9Rw,สอนหมาเล่นเปียโน",
"g82mxsH6WlE,ไม่เก็บดอกเบี้ยเมื่อชำระหนี้ก่อนกำหนด",
"s_b4r_da2yc,เฉลยมายากลหนังยางสลับเข้าอีกนิ้ว",
"OrP8mjSLG9M,เฉลยมายากลนิ้วมือหายเหลือ 4 นิ้ว",
"dgNUN8QID8Y,เตะแล้วกระโดดเข่า",
"LdXsSU8DHko,วัดน้ำหนักมวลหลังคนตาย",
"2EcHtfajMKI,เส้นผมชี้ฟ้า ฟ้ากำลังจะผ่าแถวนั้น",
"00m-3ensH1M,ขวดน้ำพลาสติกรองเก็บเศษฝุ่นปูนจากเจาะสว่าน",
"lAYCdsh10yY,CG หันหลังโยนลูกบาสลงห่วง",
"x8nWVNmviio,วางค้ำยันประตูบานสวิงให้รับน้ำหนักได้สูง",
"67gpfxQuCvQ,แสงจากหลอดไฟฟลูออเรสเซนต์กระตุ้นเซลล์มะเร็ง",
"fYq5F_jMfxc,ออกแบบล้อรถไฟรูปทรงกรวยให้สามารถเลี้ยวโค้งได้",
"eojuqou1Joc,หญ้าเนเปียร์โปรตีนสูงใช้เลี้ยงสัตว์",
"U4_kncyNqnQ,เปลือกไม้เบิร์ชจุดเป็นเชื้อไฟ",
"tb44zDi0rHM,เดินหน้าชก",
"J10JNTY7HRQ,จอดรถเข้าซอง เล็งกระจกรถขนานกับกระจกรถคันหน้า",
"LK82rjh8E80,ฟอสฟอรัสขาวติดไฟเมื่อสัมผัสอากาศ",
"1ViZ0l9kDTQ,แผ่นโลหะดัดเหล็กปลอก",
"Tiz-3YzeeB8,ความน่าจะเป็นถูกหวยลอตเตอรี่",
"J87YYIDPDEE,จูบปากแลกลิ้นติดโรคหนองใน โรคซิฟิลิส",
"gV63UzMnPB4,เต้าหู้ช่วยประเทศจีนรอดพ้นวิกฤตอาหารอดอยาก",
"MEpCsbWS-xk,ตะปูขึงลวดจับท่อกลมไม่ให้กลิ้งไหล",
"WCquwVx5pTs,หลอมแก้วเป็นลูกแก้วกลม",
"mviLHDfwdy8,จิ๊กหินเจียร์ลบขอบ 45 องศา",
"TD6LNSYKX1M,อาหารโมโหหิวเป็นสัญชาตญาณนักล่า",
"A2ystGGtQe0,เสา-คาน หล่อสำเร็จจากโรงงาน",
"zepjT4pNiIM,เหล็กฉากทำแท่นดัดเหล็กปลอก",
"vN8M-px80gU,ระบบดึงพลังงานในกล้ามเนื้อเมื่อตกใจ",
"4Xg_KXFiA6o,หลุมกลางขวดแกลอนป้องกันการกระแทกยุบตัว",
"HYegjZAh2pg,ต้มยำน้ำใส",
"y_6-y64BZ7U,เฉลยมายากลเสกห่วงเข้าในห่วง",
"KjOXBgLumh8,ปลาแซลมอนยอมตายเพื่อได้วางไข่",
"PPzIsIdv6sU,ยางสนติดไฟง่าย ใช้เป็นเชื้อไฟ",
"5iQpZw34CDo,เฉลยมายากลคว่ำแก้วใส่น้ำในถุงไม่หก",
"mnopkAarQ5c,กล้ามเนื้อฝ่อ/กระดูกบาง ขาดฮอโมนเพศชาย",
"eP6NiB8z-yc,ตีไม้กั้นคานยกผนังเฟรมบ้านกันตก",
"AZTiYCmxoOE,ผ้าตาข่ายตีไม้ตะแกรงเป็นเครื่องร่อนทราย",
"wepjek-LQ_Y,ขั้นตอนเก็บเกี่ยวพุทราจีน",
"ZGyUHSvzgrc,พูดต่อหน้าคนส่วนมากให้เลือกมองคนที่ยิ้มพยักหน้าให้คุณ",
"XqMZrZ7t0Vs,เสียงแตกของน้ำแข็งเกิดจากการเปลี่ยนแปลงของอุณหภูมิและความดันภายใน",
"kBOZ57jQcl8,แมลงหันหลังเข้าดวงไฟ",
"k66J_dHQC6k,ใช้เลข 99 เพื่่อหลอกสมองว่าเป็นเลข 0",
"auy7NaZpgUo,ตัวทาสีเก็บมุมผนัง",
"cdkReldqhEA,อายุยืน กินปลาตัวเล็ก ไม่กินเนื้อสัตว์บก อาหารอุตสาหกรรม",
"2XQ-J8-iFes,เฉลยมายากลห่วงตันสอดเข้าหากันได้",
"FubM7yvdALU,ก๊าซคาร์บอนไดออกไซด์ (CO₂) ทำให้ไฟดับ",
"-btG6gR4oK4,ใช้น้ำจับลูกดิ่งให้นิ่ง",
"x4nQjQQhadM,คานคอดินสำเร็จรูป",
"HlkrypW5xqc,ดินสอพองทำจากดินแคลเซียมคาร์บอเนตที่ผ่านการเผาและบดละเอียด",
"a8BajiCl06w,ตัดนิ้วโป้งเท้าแทนนิ้วมือ",
"0EeoWLJpvrA,Rug Pull หลอกลงทุนแล้วปิดโปรเจคหนี",
"dNPfvizOk9I,พิษของปลากระเบนมีฤทธิ์ทำลายเนื้อเยื่อ ทำให้เกิดการอักเสบและติดเชื้อได้ง่าย",
"WOtxQ6fWM40,ปวดเต้านม จากการขาดฮอร์โมนโปรเจสเตอโรน",
"nN_tXvVl3o8,โกนขนตูด เสี่ยงติดเชื้อเกิดฝี",
"UTqmvOGyDIA,เฉลยมายากลเสกหนังยางเป็นลูกกวาด",
"waq8FlY_uS4,ไก่อบซอส",
"9izxtuI8ztk,ไข่ข้นผัดกระหล่ำ",
"15cZfljZLao,แท่นเจาะดอกสว่าน",
"4ren4FZ4UkQ,ตาตี่เพราะวิวัฒนาการจากการป้องกันลมแรงและแสงแดดจัด",
"zzBwYvzaCiI,ตอกไข่ดาวใส่กระบวยกลม",
"mcf9ObbZE0A,ก๋วยเตี๋ยวคั่วไก่",
"t0X3V2brPZ8,สมองสั่งให้หาวตามโดยอัตโนมัติ",
"-uM_U5sYfsU,ขยำแผ่นฟรอยด์อลูมิเนียมขจัดสนิมบนท่อโลหะ",
"w06CoI3Xc7A,ระดับน้ำติดไม้บรรทัด",
"jyaMgwhYz9E,โปรตีนไม่เพียงพอ กล้ามเนื้อหาย",
"EyjR1PFk4Sk,แรงกดจากลูกโป่งกระจายไปยังตะปูหลายตัว ทำให้ลูกโป่งไม่แตก",
"Ng4t545qXDQ,กังกันลมผลิตไฟฟ้าฉุกเฉินใต้เครื่องบิน",
"JRsFm81nXtQ,น็อตตัวผู้ตัวเมียทำประแจขันเฉพาะหน้า",
"68RC3AKmyuY,ก้ามสะเดาแปรงฟัน รักษาโรคเหงือก ลดอาการติดเชื้อแบคทีเรีย",
"vbOkgyheZEI,คว้าจับขายกขึ้นให้คู่ต่อสู้ล้ม",
"wuVLJyjUZuo,ปากปล่องขวดน้ำติดพัดลม แปลงเป็นลมเย็น",
"LXILQ_RBv0E,ตักโน้มเหวี่ยงปูนขึ้นที่สูง",
"jIXFq8386R4,หมาในปีนซอกโขดหิน",
"mtjncUpFKh8,กำหนดจุดค้นหาเป็นรอบวงกลม",
"HEhzcqcC74o,ไฟฉาย UV ใช้ส่องหาแมงป่องจะทำให้เรืองแสง",
"IMsReCqB-Qs,เจาะรูในกระเพาะวัวเพื่อระบายก๊าซมีเทน ช่วยแก้ท้องอืดบวม",
"6K-Z3ebDT68,อัดพื้นเทปูนคอนกรีตแห้ง",
"LWSjs2bjKxQ,ไฟเป่าให้แผ่นกระเบื้องหลุด",
"-LmdZFzMbo8,ปะเก็นซิลิโคนใช้แทนเทปพันเกลียว",
"7EKaJ8km3xI,ดึงโน้มใบมะพร้าวลงเร่งออกลูก",
"q6GB4DTpkQk,เงินซื้อไม่ได้ทุกอย่าง",
"7OzI9QKwcLc,กระโดดเหยียบขาเตะ",
"rR-FVbaKcTE,แท่นแม่เหล็กเก็บอุปกรณ์ช่าง",
"9UbodMRgSNI,เคลือบน้ำมันกระทะเหล็กก่อนทำอาหาร ป้องกันติดกระทะ",
"32meAp-kOeM,สว่านทำเครื่องร่อนทราย",
"2leDRZHnPhE,ผัดมะเขือยาวโหระพา",
"M5QoaTPEikE,ซ่อมบำรุงเตาแก๊ส",
"BiBRocrid6E,พื้นตะแกรงพลาสติกระบายขี้สัตว์",
"01n4_N55TlM,น้ำตาลฟรุกโตสในน้ำผลไม้เพิ่มระดับกรดยูกลิกสูงในร่างกาย",
"Y8Q6Oq2PopQ,เก็บตัวอย่างทดสอบกำลังอัดคอนกรีตหล่อ",
"9kf6RDXfyKI,ช่วงเช้าแสงสีฟ้าจากท้องฟ้าเข้าสู่ตาเยอะกว่าแสงสีอื่น",
"agNnmztHcLI,เฉลยมายากลประกบแผ่นขั้นบันได แล้วเป็นรู",
"z6kHL1M1NQk,หัวจับก้านธูปเชื่อมเหล็ก",
"fi2isDzD8wk,เอ็นปาดปูนฉาบเกิน",
"c6hElZuOcb0,แผ่นค้ำติดตั้งฝ้าเพดาน",
"oUzH7cyh6m8,แอลกอฮอล์ฆ่าแบคทีเรีย",
"Qsan_5oBhDc,ขุดหลุมห่อใบตองฝังน้ำแข็งในดิน",
"fWF7fA2QeRw,ข้าวผัด",
"K3bHeM-BMbQ,เหล็กฉากยึดเข้ามุมรับน้ำหนัก",
"QtgsCoeCVSM,เมนทอลหลอกสมองให้รู้สึกเย็น",
"LJySKt3Tk1k,รีดแผ่นเหล็กกลม",
"xpQiGzEsbtY,เฉลยมายากลบุหรี่ทะลุเสื้อ",
"H1L3X_1NPV0,บดเปลือกต้นพยอมผสมอาหาร ทำสารกันบูดป้องกันอาหารบูด",
"bdxASYVoPEA,จับลูกเตะ เขี่ยขาให้ล้ม",
"DoxePxn79Cw,ฟาร์มปศุสัตว์ถอนฟัน ตัดหาง ตัดอัณฑะลูก เพื่อลดพฤติกรรมก้าวร้าวและควบคุมการขยายพันธุ์หมู",
"cybuXWKKaww,ฝานมันฝรั่งบางสำหรับนำไปทอด",
"cbuDrWd1554,หลอกเตะสับลง",
"km8MF76sHFw,ความเกลียดชังเป็นโซ่ล่ามในชาติหน้า",
"wC_ndhj8cNM,ทำแท่นเกรียงหวีเติมปูนก่ออิฐ",
"xoa2m4iDu2s,น้ำยาทำความสะอาดปูนแนวติดกระเบื้อง",
"jkcdbrbq2S4,แหวนรองเชื่อมน็อตตัวเมียขันเกลียวหัวขาดออก",
"26xnx_AKYBM,เจาะรูต้นไม้ฉีดอัดน้ำยาลงราก",
"Iayos0CIy2w,อาการภาวะอกรวน (Flail chest) กระดูกซี่โครงหักหลายซี่ ปอดหุบเข้าหุบออก",
"IUYeQ7Uhw5Q,โอกาสโยนเหรียญออกหัวก้อยซ้ำกัน เป็น 51:49",
"oNcCi6KJYN4,ฟ้าผ่าเกิดจากการเคลื่อนที่ของประจุไฟฟ้าภายในเมฆ หรือระหว่างเมฆกับพื้นดิน",
"Srv4ikFbx5A,องศามุมตั้งเลื่อยลันดาเลื่อยมือเลื่อยไม้",
"Ykxo3Fc1LIY,แหวนเหล็กรองจับสายไฟยึดติดผนัง",
"WpFbFF6NmWs,ลมเป่าน้ำเกาะแทนการเช็ดแล้วเป็นรอยขนแมว",
"61X6BuyrhbA,โซเดียมไซยาไนด์ (Sodium Cyanide) 80-300 มิลลิกรัม ใช้ฆ่าคน",
"8-0-A7Jm3Xs,วิธีใช้เลื่อยแท่นองศาตัดไม้เป็นวงกลม",
"xzJo6G6eh38,ข้าวผัดต้มยำกุ้ง",
"zhAU--Gs5mQ,กระป๋องห้อยจุดยากันยุง",
"S9S8u_wbwLc,ใช้นิ้วมือเป็นจิ๊กตัดแผ่นไม้ด้วยเลื่อยวงเดือน",
"1ufv7GZn0cI,เลื่อยโซ่ผ่าไม้แผ่น",
"ojYJAsljYlE,จับแขนเขี่ยขา",
"trohPZYDGyI,แร่ไพไรต์ (Pyrite) ทำทองปลอม",
"VqNbjezA3Ys,ใช้เท้าเหยียบนวดแป้ง",
"L5jdOVRQGsY,หมาไฮยีน่าถูกสิงโตโจมตีจนพิการ",
"XDSwJZJx8pk,เคี้ยวหมากฝรั่งกระตุ้นระบบย่อยอาหารใหเทำงาน",
"DmJKFWJEXEo,วางโครงสร้างเสาแยกออกจากตัวบ้านป้องกันการทรุดแล้วไปดึงรั้ง",
"V7qTmJ8pNjI,ท่อ PVC เกี่ยวอิฐก่อดึงเอ็นวัดระดับ",
"lgtVHuH2Zgc,เฉลยมายากลซ่อนไพ่ไว้ในแก้ว",
"dKIuX3_WHS0,ลูกเนียงดิบ ปวยเล้ง ตะลิงปลิง กินเยอะทำให้ไตวาย",
"g0HWA7j16hs,จิ๊กลับหัวดอกสว่านเจาะนำ",
"UBNPpzhkTx4,ระบบประสาทสัมผัสเด็กทารกกลัวการเหยียบหญ้า",
"1G3kbJNXNyg,เฉลยมายากลฉีกไพ่แล้วต่อกลับเหมือนเดิม",
"4w2fprCiVR8,ให้อภัยจิตวิญญาณเด็ก",
"O7Vz-sBmFbs,เข่าหลอกให้ยกการ์ดขึ้นเพื่อต่อยตับ",
"ctXR2NcOltk,ผูกหุ่นหลอกบนเรือป้องกันโจรสลัด",
"nexJrsl2AuA,จิ๊กตอกเสาเข็ม",
"1yHWDno5b08,ถอยรถเข้าซองช่องจอด ให้กระจกหน้าชนเส้นจอด",
"oj8bF2KVGek,แสงทำให้ขับรถตอนกลางคืนรู้สึกเร็วกว่าตอนกลางวัน",
"wkNohMNu_Tw,แก้อาการเผ็ดด้วยการก้มหน้าแลบลิ้น",
"gt-w0fGJOJs,ดีดเข็มฉีดยาไล่อากาศก่อนฉีด ป้องกันอากาศอุดตันเส้นเลือด",
"STVyICCPE8s,แผลเป็นแห้งทำหน้าที่เกราะป้องกันแบคทีเรีย ช่วยให้แผลหายเร็วขึ้น",
"7OESujmhOFw,ถอยหลังรถออกซอง ให้กระจกเสมอเส้นจอดก่อน ค่อยหักเลี้ยว",
"q79ie-eoPH8,พนักพิงเก้าอี้กดลิ้นปี่ ดันของติดหลอดลมออก",
"oNV9ioBCN-4,หลอกจะต่อยลำตัว แล้วพุ่งหมัดเสยคาง",
"eYi26wESdn0,แผ่นโซล่าเซลโปร่งแสง",
"6hSyHdKEqyo,กดกระดาษลังปั้มลายมุมโค้ง",
"OYJIW0nieEI,เฉลยมายากลฉีกกระดาษแล้วกลับกลายมาเป็นแผ่นเดิม"
];