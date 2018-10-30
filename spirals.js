function u(t) {
  q=255
  for(i=0;i<q;i++) {
    x.fillStyle=R(C(t)*q,i,i);
    x.beginPath();
    x.arc(S(i+t*5)*(T(t)*q)+960, C(i+t*5)*(S(t)*q)+540,10,0,7)
    x.fill();
  }
}
