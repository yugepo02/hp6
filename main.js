
/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/


// Ready
$("#my_btn").click(()=>{
	const sndA = new Howl({
		src:"./sound/keikoku.mp3" //サウンドファイルのパス
	  });
	  


	console.log("計算する")
   
	const htval =$("#ht").val();//文字列を取得
	const numval1 =(htval);//文字列->数値
	console.log("身長:", numval1);
	

   const  wtval =$("#wt").val();//文字列を取得
	const numval2 =(wtval);//文字列->数値
	console.log("体重:", numval2);

	
	const bmi= (numval2/(numval1/100)**2)
	console.log("BMI;",bmi.toFixed(1));
	$("#bmi").text(bmi.toFixed(1));
	if(bmi<=18.5)
	sndA.play()
	
	
if (bmi>=40)
sndA.play()


});