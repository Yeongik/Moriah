function statusCalc(){
	var Plus = Number(document.getElementById("Plus").value);
	var BAtk = Number(document.getElementById("BAtk").value);
	var BDef = Number(document.getElementById("BDef").value);
	var Weapons1 = document.getElementById("Weapons1").value;
	var Weapons2 = document.getElementById("Weapons2").value;
	var Weapons3 = document.getElementById("Weapons3").value;
	var CType = document.getElementById("CType").value;
	var NMAtk,NMDef,AdAtk1=0,AdDef1=0,AdAtk2=0,AdDef2=0;
	var SAtk,SDef,PAtk,PDef;
	var MAtk,MDef,NBAtk,NBDef;
	var reAtk=0, reDef=0;

	MAtk = Math.floor(BAtk*1.15);
	MDef = Math.floor(BDef*1.15);
	
	switch(CType){
		case 'S':
			NBAtk = Math.ceil(BAtk*1.2923);
			NBDef = Math.ceil(BDef*1.2923);
			break;
		case 'R':
			NBAtk = Math.ceil(BAtk*1.309);
			NBDef = Math.ceil(BDef*1.309);
			break;
	}
	
	SAtk = Math.floor(MAtk*0.15)+Math.floor(MAtk*0.15);
	SDef = Math.floor(MDef*0.15)+Math.floor(MDef*0.15);
	
	NMAtk = Math.floor(NBAtk*1.15);
	NMDef = Math.floor(NBDef*1.15);
	
	PAtk = Math.floor((Math.floor(NBAtk*0.05))/5)*5*Plus;
	PDef = Math.floor((Math.floor(NBDef*0.05))/5)*5*Plus;
	
	TotalAtk = NMAtk+SAtk;
	TotalDef = NMDef+SDef;

	switch(Weapons1){
		case '1':
			AdAtk1=0;
			AdDef1=0;
			break;
		case '2':
			AdAtk1=(MAtk*0.1)*0.15;
			AdDef1=0;
			break;
		case '3':
			AdAtk1=1000*0.15;
			AdDef1=0;
			break;
		case '4':
			AdAtk1=(MAtk*0.15)*0.15;
			AdDef1=0;
			break;
		case '5':
			AdAtk1=3000*0.15;
			AdDef1=0;
			break;
		case '6':
			AdAtk1=0;
			AdDef1=(MDef*0.1)*0.15;
			break;
		case '7':
			AdAtk1=0;
			AdDef1=1000*0.15;
			break;	
		case '8':
			AdAtk1=0;
			AdDef1=(MDef*0.15)*0.15;
			break;
		case '9':
			AdAtk1=0;
			AdDef1=3000*0.15;
		break;
	}
	switch(Weapons2){
		case '1':
			AdAtk2=0;
			AdDef2=0;
			break;
		case '2':
			AdAtk2=(MAtk*0.1)*0.15;
			AdDef2=0;
			break;
		case '3':
				AdAtk2=1000*0.15;
			AdDef2=0;
			break;
		case '4':
			AdAtk2=(MAtk*0.15)*0.15;
			AdDef2=0;
			break;
		case '5':
			AdAtk2=3000*0.15;
			AdDef2=0;
			break;
		case '6':
			AdAtk2=0;
			AdDef2=(MDef*0.1)*0.15;
			break;
		case '7':
			AdAtk2=0;
			AdDef2=1000*0.15;
			break;
		case '8':
			AdAtk2=0;
			AdDef2=(MDef*0.15)*0.15;
			break;
		case '9':
			AdAtk2=0;
			AdDef2=3000*0.15;
			break;
	}
	TotalAtk=Math.floor(TotalAtk+AdAtk1+AdAtk2+PAtk);
	TotalDef=Math.floor(TotalDef+AdDef1+AdDef2+PDef);
	switch(Weapons3){
		case '1':
			reAtk=TotalAtk;
			reDef=TotalDef;
			break;
		case '2':
			reAtk=TotalAtk+(TotalAtk*0.1);
			reDef=TotalDef;
			break;
		case '3':
			reAtk=TotalAtk+1000;
			reDef=TotalDef;
			break;
		case '4':
			reAtk=TotalAtk+(TotalAtk*0.15);
			reDef=TotalDef;
			break;
		case '5':
			reAtk=TotalAtk+3000;
			reDef=TotalDef;
			break;
		case '6':
			reAtk=TotalAtk;
			reDef=TotalDef+(TotalDef*0.1);
			break;
		case '7':
			reAtk=TotalAtk;
			reDef=TotalDef+1000;
			break;
		case '8':
			reAtk=TotalAtk;
			reDef=TotalDef+(TotalDef*0.15);
			break;
		case '9':
			reAtk=TotalAtk;
			reDef=TotalDef+3000;
			break;
	}
	document.getElementById("TotalAtk").value = Math.floor(reAtk);
	document.getElementById("TotalDef").value = Math.floor(reDef);
}
