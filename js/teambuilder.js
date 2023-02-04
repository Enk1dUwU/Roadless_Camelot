function mostrar_equipo()
{
    var opt1=document.getElementById("tb_opt_1").value
    var opt2=document.getElementById("tb_opt_2").value
    var opt3=document.getElementById("tb_opt_3").value
    var opt4=document.getElementById("tb_opt_4").value
    var opt5=document.getElementById("tb_opt_5").value
    var opt6=document.getElementById("tb_opt_6").value

    img1=(opt1.substring(0,3))
    img2=(opt2.substring(0,3))
    img3=(opt3.substring(0,3))
    img4=(opt4.substring(0,3))
    img5=(opt5.substring(0,3))
    img6=(opt6.substring(0,3))

    class1=(opt1.substring(4,30))
    class2=(opt2.substring(4,30))
    class3=(opt3.substring(4,30))
    class4=(opt4.substring(4,30))
    class5=(opt5.substring(4,30))
    class6=(opt6.substring(4,30))

    var stg1=document.getElementById("tb_asc_1").value
    var stg2=document.getElementById("tb_asc_2").value
    var stg3=document.getElementById("tb_asc_3").value
    var stg4=document.getElementById("tb_asc_4").value
    var stg5=document.getElementById("tb_asc_5").value
    var stg6=document.getElementById("tb_asc_6").value

    f1="img/servants/portrait_servant_"+img1+"_"+stg1+".png"
    f2="img/servants/portrait_servant_"+img2+"_"+stg2+".png"
    f3="img/servants/portrait_servant_"+img3+"_"+stg3+".png"
    f4="img/servants/portrait_servant_"+img4+"_"+stg4+".png"
    f5="img/servants/portrait_servant_"+img5+"_"+stg5+".png"
    f6="img/servants/portrait_servant_"+img6+"_"+stg6+".png"

    c1="img/class_icon_"+class1+".png"
    c2="img/class_icon_"+class2+".png"
    c3="img/class_icon_"+class3+".png"
    c4="img/class_icon_"+class4+".png"
    c5="img/class_icon_"+class5+".png"
    c6="img/class_icon_"+class6+".png"

    document.images["tb_port_1"].src=f1;
    document.images["tb_port_2"].src=f2;
    document.images["tb_port_3"].src=f3;
    document.images["tb_port_4"].src=f4;
    document.images["tb_port_5"].src=f5;
    document.images["tb_port_6"].src=f6;

    document.images["tb_port_class_1"].src=c1;
    document.images["tb_port_class_2"].src=c2;
    document.images["tb_port_class_3"].src=c3;
    document.images["tb_port_class_4"].src=c4;
    document.images["tb_port_class_5"].src=c5;
    document.images["tb_port_class_6"].src=c6;

    document.getElementById('textoprueba1').innerHTML=f1;
    document.getElementById('textoprueba2').innerHTML=f2;
    document.getElementById('textoprueba3').innerHTML=f3;
    document.getElementById('textoprueba4').innerHTML=f4;
    document.getElementById('textoprueba5').innerHTML=f5;
    document.getElementById('textoprueba5').innerHTML=f6;
}
function sup(num)
{
    support = document.getElementById("support")
    support.style.left = `${num}px`;
}