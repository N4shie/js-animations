function u(t) {
  c.width^=0
  t?o.push({X:1,Y:1,U:S(t),V:C(t)}):o=[]
  o.map(a=>{Q=a.X**2+a.Y**2,a.X+=a.U-=a.X/Q,a.Y+=a.V-=a.Y/Q,x.fillRect(a.X,a.Y,9,9)})
}
