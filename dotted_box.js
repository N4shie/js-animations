function u(t) {
  c.width|=0
  for(i=0;i<1000;i++){
    q=i/100-5
    w=i%100/10-5
    e=i%10-5
    p=S(t)*e+C(t)*w
    v=C(t)*e-S(t)*w-20
    x.fillRect(999+q/v*999,500+p/v*999,9,9)
  }
}
