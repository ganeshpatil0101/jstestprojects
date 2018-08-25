console.log("Case 1: Promise Resolved But Throws Error from Then Function ")
var pr = new Promise(( res,rej)=>{
	setTimeout(()=>{res("pr agrs");},2000);
});
pr.then((args)=>{
	console.log("case 1:promise resolved",args);
	// Throwing some error from then function 
	console.log(window.test123.ttt);
}).catch((e)=>{
	// This block will execute when then throws error 
	// as well as this will execute when promise rejects
	console.error("case 1:error from then");
});

pr.catch((e)=>{
	// This block call is case of only when Promise rejects
	console.log("case 1:this error is from promise",e);
});
pr.finally(case2);

function case2(){
	console.log("Case 2: Promise Rejected, and both catch called ")
	var pr2 = new Promise(( res,rej)=>{
		setTimeout(()=>{rej("pr2 reject");},2500);
	});
	pr2.then((args)=>{
		console.log("case 2:promise resolved",args);
		// Throwing some error from then function 
		//console.log(window.test123.ttt);
	}).catch((e)=>{
		// This block will execute when then throws error 
		// as well as this will execute when promise rejects
		console.error("case 2:error from then",e);
	});

	pr2.catch((e)=>{
		// This block call is case of only when Promise rejects
		console.error("case 2:this error is from promise",e);
	});
	pr2.finally(case3);
}

function case3(){
	console.log("Case 3: Promise resolved, but its error, throw error from then all catch shuld call  ")
	let prcase = function(){
		return new Promise(( res,rej)=>{
		setTimeout(()=>{res({status:901,statusText:"conflict"});},3500);
		}).then((args)=>{
			console.log("case 3:promise resolved checking args is invalid ",args);
			// Throwing some error from then function 
			throw args;
		}).catch((e)=>{
			// This block will execute when then throws error 
			// as well as this will execute when promise rejects
			console.error("case 3:error received from then",e);
			throw e;
		});
	};
	prcase().then((args)=>{
		console.log("case3 then subscriber ",args);
	}).catch((e)=>{
		console.error("case 3 error subscriber ",e);
	}).finally(case4);
}
function case4(){
	// case 4 : promise then chaining with args
	let pr = function(){
		return new Promise((res,rej)=>{
			setTimeout(res({ab:"test",pr:"case4"}), 4000);
		}).then((args)=>{
			console.log("case4 : args ",args);
			args["newAdded1"] = "test";
			return args;
		}).then((args)=>{
			console.log("case4 : then 2 ",args);
			args["newAdded2"] = "test";
			return args;
		});
	};
	let p4 = pr().then((ar)=>{console.log("pr4 then ",ar);return ar;});
	p4.then((arg)=>{
		console.log("case 4: p4 ",arg);
	})
}


