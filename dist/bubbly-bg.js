window.bubbly=function(t){const e=t||{},o=()=>Math.random(),a=e.canvas||document.createElement("canvas");let n=a.width,l=a.height;null===a.parentNode&&(a.setAttribute("style","position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"),n=a.width=window.innerWidth,l=a.height=window.innerHeight,document.body.appendChild(a));const i=a.getContext("2d");i.shadowColor=e.shadowColor||"#fff",i.shadowBlur=e.blur||4;let r=e.gradientLength||Math.sqrt(n/2*n/2+l/2*l/2),h=e.gradientAngle||-Math.PI/4,c=(0+n)/2,d=(0+l)/2,s=c-r*Math.cos(h),u=d-r*Math.sin(h),f=c+r*Math.cos(h),b=d+r*Math.sin(h);const p=i.createLinearGradient(s,u,f,b);p.addColorStop(0,e.colorStart||"#2AE"),p.addColorStop(1,e.colorStop||"#17B");const g=e.bubbles||Math.floor(.02*(n+l)),m=[];for(let t=0;t<g;t++)m.push({f:(e.bubbleFunc||(()=>`hsla(0, 0%, 100%, ${.1*o()})`)).call(),x:o()*n,y:o()*l,r:(e.radiusFunc||(()=>4+o()*n/25)).call(),a:(e.angleFunc||(()=>o()*Math.PI*2)).call(),v:(e.velocityFunc||(()=>.1+.5*o())).call()});!function t(){if(null===a.parentNode)return cancelAnimationFrame(t);!1!==e.animate&&requestAnimationFrame(t),i.globalCompositeOperation="source-over",i.fillStyle=p,i.fillRect(0,0,n,l),i.globalCompositeOperation=e.compose||"lighter",m.forEach(t=>{i.beginPath(),i.arc(t.x,t.y,t.r,0,2*Math.PI),i.fillStyle=t.f,i.fill(),t.x+=Math.cos(t.a)*t.v,t.y+=Math.sin(t.a)*t.v,t.x-t.r>n&&(t.x=-t.r),t.x+t.r<0&&(t.x=n+t.r),t.y-t.r>l&&(t.y=-t.r),t.y+t.r<0&&(t.y=l+t.r)})}()};
