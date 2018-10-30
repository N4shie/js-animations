function u(t) {
  w=S(t)*100+110;
  c.width=500;
  for(i=0;i<2000;i++){
    v=~~(i/50)
    x.fillRect(i%50*w*2+v%2*w,v*w,w,w)
  }
}
