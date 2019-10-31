function u(t) {
	x.transform(540,0,0,540,(c.width=1920)/2,540);
	for(i=-t,n=20;n--;i+=t/8)
	x.lineTo(C(i), S(i));
	x.fill("evenodd");
}
