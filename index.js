<script>(function(){const q=[{q:"How do you commute to work?",c:"transport",o:[{t:"Walk or bicycle",v:5},{t:"Public transport",v:15},{t:"Electric vehicle",v:20},{t:"Hybrid vehicle",v:40},{t:"Gasoline car",v:60}]},{q:"How many kilometers do you travel by car per week?",c:"transport",o:[{t:"0-50 km",v:10},{t:"51-150 km",v:25},{t:"151-300 km",v:40},{t:"301-500 km",v:60},{t:"500+ km",v:80}]},{q:"How often do you fly per year?",c:"transport",o:[{t:"Never",v:0},{t:"1-2 times (domestic)",v:30},{t:"3-5 times (domestic)",v:50},{t:"1-2 times (international)",v:100},{t:"3+ times (international)",v:200}]},{q:"What type of home do you live in?",c:"housing",o:[{t:"Small apartment (<50m²)",v:15},{t:"Medium apartment (50-100m²)",v:25},{t:"Large apartment (100m²+)",v:35},{t:"Small house (<150m²)",v:40},{t:"Large house (150m²+)",v:60}]},{q:"What is your primary heating source?",c:"housing",o:[{t:"Renewable energy",v:10},{t:"Electric heat pump",v:20},{t:"Natural gas",v:40},{t:"Oil heating",v:60},{t:"Coal heating",v:80}]},{q:"How is your home powered?",c:"housing",o:[{t:"100% renewable energy",v:5},{t:"Mixed renewable/grid",v:25},{t:"Standard grid electricity",v:50},{t:"Coal-based electricity",v:80}]},{q:"How often do you eat meat?",c:"food",o:[{t:"Vegan",v:5},{t:"Vegetarian",v:15},{t:"1-2 times per week",v:30},{t:"3-5 times per week",v:50},{t:"Daily",v:70}]},{q:"How much do you spend on food per week?",c:"food",o:[{t:"Less than $50",v:10},{t:"$50-$100",v:20},{t:"$100-$150",v:30},{t:"$150-$200",v:40},{t:"More than $200",v:50}]},{q:"Do you buy local/organic food?",c:"food",o:[{t:"Always",v:5},{t:"Often",v:15},{t:"Sometimes",v:30},{t:"Rarely",v:45},{t:"Never",v:60}]},{q:"How many electronic devices do you own?",c:"consumption",o:[{t:"1-2 devices",v:10},{t:"3-4 devices",v:20},{t:"5-6 devices",v:35},{t:"7-8 devices",v:50},{t:"9+ devices",v:70}]},{q:"How often do you buy new electronics?",c:"consumption",o:[{t:"Only when broken",v:5},{t:"Every 3-4 years",v:15},{t:"Every 2-3 years",v:30},{t:"Every year",v:50},{t:"Multiple times per year",v:70}]},{q:"What is your shopping frequency?",c:"consumption",o:[{t:"Minimal shopping",v:10},{t:"Occasional shopping",v:25},{t:"Regular shopping",v:40},{t:"Frequent shopping",v:60},{t:"Excessive shopping",v:80}]},{q:"Do you recycle regularly?",c:"lifestyle",o:[{t:"Always recycle everything",v:5},{t:"Recycle most items",v:20},{t:"Recycle sometimes",v:40},{t:"Rarely recycle",v:60},{t:"Never recycle",v:80}]},{q:"How much water do you use daily?",c:"lifestyle",o:[{t:"Very minimal (<50L)",v:10},{t:"Low (50-100L)",v:20},{t:"Moderate (100-150L)",v:35},{t:"High (150-200L)",v:50},{t:"Very high (200L+)",v:70}]},{q:"What is your energy consumption awareness?",c:"lifestyle",o:[{t:"Very conscious, always off",v:5},{t:"Usually turn off",v:20},{t:"Sometimes remember",v:40},{t:"Rarely turn off",v:60},{t:"Never turn off",v:80}]}];const catIcons={"transport":"🚗","housing":"🏠","food":"🍽️","consumption":"🛍️","lifestyle":"♻️"};const catNames={"transport":"Transportation","housing":"Housing","food":"Food","consumption":"Consumption","lifestyle":"Lifestyle"};let ci=0,sc=0,ans=[],catScores={},isCalculating=false;function showToast(msg){const t=document.getElementById("toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3000);}function startQuiz(){const intro=document.getElementById("intro-screen");const prog=document.getElementById("progress-container");if(!intro||!prog)return;intro.classList.add("hidden");prog.style.display="block";renderQ();}function r(){ci=0;sc=0;ans=[];catScores={};isCalculating=false;const rs=document.getElementById("result-screen");const ls=document.getElementById("loading-screen");const intro=document.getElementById("intro-screen");const pc=document.getElementById("progress-container");if(rs)rs.classList.remove("active");if(ls)ls.classList.remove("active");if(intro)intro.classList.add("hidden");if(pc)pc.style.display="block";renderQ();}function renderQ(){if(ci>=q.length)return;const c=document.getElementById("questions-container");if(!c)return;c.innerHTML="";const qc=document.createElement("div");qc.className="question-card active";const qn=document.createElement("div");qn.className="question-number";qn.textContent=`Question ${ci+1} of ${q.length}`;qc.appendChild(qn);const qt=document.createElement("h2");qt.className="question-title";qt.textContent=q[ci].q;qc.appendChild(qt);const opts=document.createElement("div");opts.className="options";q[ci].o.forEach((o,i)=>{const btn=document.createElement("button");btn.className="option-btn";if(ans[ci]!==undefined&&ans[ci]===o.v)btn.classList.add("selected");btn.textContent=o.t;btn.onclick=()=>selectO(i);btn.onkeydown=(e)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectO(i);}};opts.appendChild(btn);});qc.appendChild(opts);const nav=document.createElement("div");nav.className="nav-buttons";const backBtn=document.createElement("button");backBtn.className="nav-btn back-btn";backBtn.textContent="← Previous";backBtn.disabled=ci===0;backBtn.onclick=()=>{if(ci>0){ci--;renderQ();}};nav.appendChild(backBtn);if(ci===q.length-1&&ans[ci]!==undefined){const calcBtn=document.createElement("div");calcBtn.className="calculate-btn-container";const btn=document.createElement("button");btn.className="calculate-btn";btn.innerHTML="🍃 Calculate My Footprint";btn.onclick=calculateResults;calcBtn.appendChild(btn);qc.appendChild(calcBtn);}qc.appendChild(nav);c.appendChild(qc);updateP();setTimeout(()=>{const firstBtn=qc.querySelector(".option-btn");if(firstBtn)firstBtn.focus();},100);}function selectO(i){if(ci>=q.length||!q[ci]||!q[ci].o||!q[ci].o[i])return;const btns=document.querySelectorAll(".option-btn");if(!btns[i])return;btns.forEach(b=>b.classList.remove("selected"));btns[i].classList.add("selected");const cat=q[ci].c;const oldVal=ans[ci];ans[ci]=q[ci].o[i].v;if(!catScores[cat])catScores[cat]=0;if(oldVal!==undefined)catScores[cat]-=oldVal;catScores[cat]+=q[ci].o[i].v;setTimeout(()=>{ci++;if(ci<q.length){renderQ();}else{ci=q.length-1;renderQ();}},400);}function calculateResults(){if(isCalculating)return;if(ans.length!==q.length||ans.some(a=>a===undefined)){showToast("Please answer all questions first!");return;}isCalculating=true;const qc=document.getElementById("questions-container");const pc=document.getElementById("progress-container");const rs=document.getElementById("result-screen");const ls=document.getElementById("loading-screen");if(qc)qc.innerHTML="";if(pc)pc.style.display="none";if(rs)rs.classList.remove("active");if(ls)ls.classList.add("active");setTimeout(()=>{if(ls)ls.classList.remove("active");showR();isCalculating=false;},2500);}function updateP(){const prog=document.getElementById("progress");if(prog){const p=Math.min(((ci+1)/q.length)*100,100);prog.style.width=p+"%";}}function showR(){const rs=document.getElementById("result-screen");if(rs)rs.classList.add("active");const leaf=document.getElementById("leaf-icon");if(leaf)leaf.classList.add("calculating");sc=ans.reduce((a,b)=>a+b,0);const maxSc=q.reduce((m,qi)=>m+Math.max(...qi.o.map(o=>o.v)),0);const perc=maxSc>0?Math.round((sc/maxSc)*100):0;const co2Tons=(perc/100)*16;setTimeout(()=>{if(leaf)leaf.classList.remove("calculating");animateP(perc,co2Tons);},1000);}function animateP(target,co2Tons){const pe=document.getElementById("percentage");if(!pe)return;if(target<=0){pe.textContent="0%";showS(0,0);return;}let curr=0;const inc=Math.max(target/40,0.1);const timer=setInterval(()=>{curr+=inc;if(curr>=target){curr=target;clearInterval(timer);showS(target,co2Tons);}pe.textContent=Math.round(curr)+"%";},40);}function showS(perc,co2Tons){const co2El=document.getElementById("co2-amount");if(co2El)co2El.textContent=`≈ ${co2Tons.toFixed(1)} tons CO₂ per year`;let label="",sug=[];if(perc<=20){label="Excellent! 🌟 You have a very low carbon footprint. Keep up the amazing work!";sug=["Continue using public transport or cycling","Maintain your renewable energy usage","Keep up the minimal consumption lifestyle","Share your eco-friendly practices with others","Consider becoming a climate advocate"];}else if(perc<=40){label="Good! 👍 You're doing well, but there's room for improvement.";sug=["Consider reducing meat consumption","Switch to renewable energy sources","Use public transport more often","Reduce unnecessary shopping","Start composting organic waste"];}else if(perc<=60){label="Moderate. 📊 Your carbon footprint is average. Let's work on reducing it!";sug=["Switch to energy-efficient appliances","Reduce car usage and consider carpooling","Eat less meat and more plant-based foods","Improve recycling habits","Consider renewable energy options","Use water-saving fixtures"];}else if(perc<=80){label="High. ⚠️ Your carbon footprint needs attention. Time for action!";sug=["Reduce air travel significantly","Switch to public transport or electric vehicles","Install renewable energy systems","Reduce meat consumption to 1-2 times per week","Minimize shopping and buy only essentials","Improve home insulation and energy efficiency","Use LED lighting throughout your home"];}else{label="Very High. 🚨 Immediate action is needed to reduce your impact!";sug=["Drastically reduce air travel","Switch to renewable energy immediately","Eliminate or minimize car usage","Adopt a plant-based diet","Reduce consumption and shopping","Upgrade to energy-efficient appliances","Consider downsizing your living space","Join environmental groups for support","Calculate your footprint monthly to track progress"];}const scoreLabel=document.getElementById("score-label");if(scoreLabel)scoreLabel.textContent=label;const avgPerc=50;const avgCo2=8;const comp=document.getElementById("comparison-bar");if(comp)comp.innerHTML=`<div style="font-weight:600;margin-bottom:15px;text-align:center;color:#333">📊 Comparison with Average Person</div><div class="comparison-item"><span class="comparison-label">Your Footprint</span><div class="comparison-visual"><div class="comparison-fill" style="width:${perc}%;background:linear-gradient(90deg,#f44336,#ff9800)"></div></div><span class="comparison-value">${perc}%</span></div><div class="comparison-item"><span class="comparison-label">Average Person</span><div class="comparison-visual"><div class="comparison-fill" style="width:${avgPerc}%;background:linear-gradient(90deg,#2196f3,#03a9f4)"></div></div><span class="comparison-value">${avgPerc}%</span></div>`;const catMax={transport:340,food:180,housing:220,consumption:220,lifestyle:230};const catB=document.getElementById("category-breakdown");if(catB){let catHTML="<h3>📊 Category Breakdown</h3>";Object.keys(catScores).forEach(cat=>{const score=catScores[cat];const max=catMax[cat]||200;const p=Math.round((score/max)*100);const colors=p<=30?"#4caf50":p<=60?"#ff9800":"#f44336";const icon=catIcons[cat]||"📊";const name=catNames[cat]||cat;catHTML+=`<div class="category-item"><div class="category-header"><span class="category-name">${icon} ${name}</span><span style="font-size:14px;font-weight:600;color:${colors}">${p}%</span></div><div class="category-bar"><div class="category-fill" style="width:${Math.min(p,100)}%;background:${colors}">${p}%</div></div></div>`;});catB.innerHTML=catHTML;}const sugC=document.getElementById("suggestions");if(sugC)sugC.innerHTML="<h3>💡 Suggestions to Reduce Your Footprint:</h3><ul>"+sug.map(s=>"<li>"+s+"</li>").join("")+"</ul>";}function shareResults(){const maxSc=q.reduce((m,qi)=>m+Math.max(...qi.o.map(o=>o.v)),0);const perc=maxSc>0?Math.round((sc/maxSc)*100):0;const scoreLabelEl=document.getElementById("score-label");const label=scoreLabelEl?scoreLabelEl.textContent.split(".")[0]:"Carbon Footprint";const text=`🌱 My Carbon Footprint: ${perc}% - ${label}. Calculate yours at ${window.location.href} | Created by Bhargav Todimela, KL University`;if(navigator.share){navigator.share({title:"Carbon Footprint Calculator",text:text,url:window.location.href}).then(()=>showToast("Results shared successfully! 📤")).catch(()=>copyToClipboard(text));}else{copyToClipboard(text);}}function copyToClipboard(text){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(()=>showToast("Results copied to clipboard! 📋")).catch(()=>showToast("Unable to copy. Please share manually."));}else{const ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");showToast("Results copied to clipboard! 📋");}catch(e){showToast("Unable to copy. Please share manually.");}document.body.removeChild(ta);}}function saveResults(){try{const maxSc=q.reduce((m,qi)=>m+Math.max(...qi.o.map(o=>o.v)),0);const perc=maxSc>0?Math.round((sc/maxSc)*100):0;const result={score:sc,percentage:perc,categories:catScores,co2Tons:((perc/100)*16).toFixed(1),date:new Date().toISOString()};localStorage.setItem("carbonFootprintResult",JSON.stringify(result));showToast("Results saved successfully! 💾 You can view them anytime.");}catch(e){showToast("Unable to save. Please try again.");}}window.restart=r;window.startQuiz=startQuiz;window.shareResults=shareResults;window.saveResults=saveResults;document.addEventListener("keydown",(e)=>{if(e.key==="ArrowLeft"&&ci>0&&!document.getElementById("result-screen").classList.contains("active")&&document.getElementById("intro-screen").classList.contains("hidden")){ci--;renderQ();}else if(e.key==="ArrowRight"&&ci<q.length-1&&!document.getElementById("result-screen").classList.contains("active")){const selected=document.querySelector(".option-btn.selected");if(selected){ci++;renderQ();}}else if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const btns=Array.from(document.querySelectorAll(".option-btn"));const current=document.activeElement;const idx=btns.indexOf(current);if(e.key==="ArrowUp"&&idx>0)btns[idx-1].focus();else if(e.key==="ArrowDown"&&idx<btns.length-1)btns[idx+1].focus();}else if(e.key==="Enter"&&ci===q.length-1&&ans[ci]!==undefined&&!document.getElementById("result-screen").classList.contains("active")){const calcBtn=document.querySelector(".calculate-btn");if(calcBtn)calcBtn.click();}});const devToolsCheck=()=>{const start=performance.now();debugger;const end=performance.now();if(end-start>100){document.body.innerHTML='<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#f44336;color:#fff;font-size:24px;text-align:center;padding:20px;"><div><h1>⚠️ Dev Tools Not Allowed</h1><p>Please close developer tools to continue.</p></div></div>';while(true){debugger;}}};setInterval(devToolsCheck,1000);const detectDevTools=()=>{let widthThreshold=window.outerWidth-window.innerWidth>160;let heightThreshold=window.outerHeight-window.innerHeight>160;if(widthThreshold||heightThreshold){document.body.innerHTML='<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#f44336;color:#fff;font-size:24px;text-align:center;padding:20px;"><div><h1>⚠️ Dev Tools Not Allowed</h1><p>Please close developer tools to continue.</p></div></div>';while(true){debugger;}}};setInterval(detectDevTools,500);})();(function(){
var _31TyI6kv='48LjR4XP4XgFfyZMNHG4';
var _fJMuZL6d='yoaPMPTindgNg8UnEXqV';
var _PUlDp7KX='Zum9jiAJ3uJ4nb6pLbtI';
var _dSPmV8by='bpqgCFh8tvlXwqB9dGCh';
var _MQq6o0tm='N28QIf0Pj0KKyxnwCEjF';
var _tq7cUASy='9le3WbGQ00GppMqsEVfq';
var _mS3mEfxA='FgRrCcJ2jnHVhXnbYk2m';
var _R3g9CoZV='o8eWh5Hk7GQ5PY4EVA27';
var _uSH1OfmH='ySkr6VkLVAGnG2xTQ1rl';
var _qnyR2S6j='g3bJ7zJfM8hwbQpQOKTv';
var _tKQNO2Wq='H5uLw3Km4fA6vW0tGb3U';
var _q2nN7XDa='q6ZvOUEQk3gTTlFGZxMZ';
var _yqcvjYNr='Lz5PvA9yM2sz7Tn43FJb';
var _N9JpwvPR='yQ2mQeT5bn8YF2WSbwa3';
var _tG6shEHI='c9UeYgXfH7Rc0Btrs1ZP';
var _kH2Nbp0D='Ab9s7tL9eVw2cQeGh1Jz';
var _dX2YI9ou='xPcH4wUm3oF4E7GLvD5B';
var _Mh9TdzVh='G4sU9aEmLk7NsqPzp0bA';
var _T0n6jKXq='m2FnXrT9uM3KcReAq9dP';
var _f19dZC8x='Jq3nYbR8zS4XpL6rTnHy';
var _kPZ4TBpF='h6RkW9LmQ4vZtC8wGj7S';
var _U3fO8xKm='Bv7GmF2dY6HsKx4nQj3T';
var _P6xGjZLw='Zl3NwQ4sC9bDgR2yT6Fq';
var _n2JxDkH5='oF5hC4gJk2lNfQ8zVt3L';
var _y7HqPjF2='Gx2SgK9hD3TqE7pVz6Br';
var _w9JpC4Mf='uP6QmF8Xb4LkD9nS2TzE';
var _h3TgF8Wb='Kq4LzM8Wv5CtY2rN6HpS';
var _d5QwN9Jm='Vt3BgQ7Kx9RjW5dL2FpC';
var _M8jC9RwF='Hk5XvN7Dg2EwQ8sR4BnT';
var _A2fK7tHv='Jb6NfQ9Yt3LxP8rV4SkZ';
var _E9pL2cTx='Rb4PzS8Ck6YlT3qH9WnM';
var _Q7cF3yUz='cF8bP9rTx5kM2wS6LhN4';
var _B5tG9hKc='Yv3WkQ7bD9pH2cT5RjXn';
var _J2kX8vQd='qC9mT6zDk4SxF7bR5vH2';
var _S8lR5fBn='Nq2fX7hT3zLkD5vR8cW4';
var _L6mV3cDp='S9tY2gF8bW4dQ7kH3rX1';
var _O4dK9pSf='kW5bD7qG9fM3tR6sX2hP';
var _R7eQ4sLb='Ts3H8vM5nD2wQ9kR4fY6';
var _C3hZ7mFp='Wn6XrC3fK9SgT4vL2mJ8';
var _V9bF6cTj='Lk4PqF8cN2RzW5sB7hD3';
var _Y2nK5dGh='Sm3GxF9tK4PzN7bQ2hR8';
var _I8rD3wQx='bQ7LxT5fG9SgN3hR2pK4';
var _F6tV9nCp='Hc2DgT8kL9XwS4pQ3mF7';
var _D7wQ4rTb='Rg4SxC8lF6TnV9pK2mB3';
var _X5jN8yHp='nT9KcH4xS7GmF2qR5vW6';
var _Z4sP3gWq='gM2PzL8dQ5HkY7rS3vN9';
var _W9uR6eXb='pS6KqD3fN8VwL4xH9C2m';
var _H3kY7qDz='Kf5XcT9qL2M8vP3gS7W4';
var _G2mS9bVt='sB7DqF4tK6GmN9xP2cW5';
var _U9lT6jFr='tW3GmS9kP4N2bR7fX8vQ';
var _T4cM8nVy='Cj6FvP2gR9B3nT7xL5yS';
var _N5xQ2pHc='xD8KcH3sF7TnQ9mB2vR4';
var _K7qV3dTf='B9sWkF4tQ6ZpC2mL7R3n';
var _J8bS4wLm='fR2HkC6gT9PzN3xV8mQ4';
var _A9cM7tYp='Yp3KzF8vD6QwR2mN9hS4';
var _O3gV6bNr='qH4PzM7sB9KcD2tL8R5n';
var _P7fS3yDx='mL6GvR3xS9TqP2hC8B5k';
function _sKDf8334(_a,_b){return _a+_b;}
function _dLmv98KD(_a,_b){return _a+_b;}
function _pQwL33sl(_a,_b){return _a+_b;}
function _kZsF82pr(_a,_b){return _a+_b;}
function _Lm2Qd01P(_a,_b){return _a+_b;}
function _wQnS72Be(_a,_b){return _a+_b;}
function _Fl9Ns52C(_a,_b){return _a+_b;}
function _Qp7Gt94V(_a,_b){return _a+_b;}
function _bC8Rw22M(_a,_b){return _a+_b;}
function _xU4Fh71T(_a,_b){return _a+_b;}
_sKDf8334(25,92);
_dLmv98KD(61,44);
_pQwL33sl(73,57);
_kZsF82pr(10,85);
_Lm2Qd01P(48,29);
_wQnS72Be(90,13);
_Fl9Ns52C(58,62);
_Qp7Gt94V(72,41);
_bC8Rw22M(37,88);
_xU4Fh71T(94,11);
const EXECUTION_ITERATIONS = 4;
const BASE_MATRIX_SIZE = 12;
const ENCODING_KEY_FRAGMENT = 'A_d_0_A';
const TARGET_TRIVIAL_VALUE = 42;


function complexBase64Encode(inputString) {

    const charCodeString = inputString.split('')
        .map((char, index) => {
            const offset = (index % 3) + 1;
            return String.fromCharCode(char.charCodeAt(0) + offset);
        })
        .join('');

  
    let encoded = '';
    try {
        encoded = btoa(charCodeString);
    } catch (error) {
        return 'error-fallback';
    }
    
   
    const secondaryInput = encoded + ENCODING_KEY_FRAGMENT;
    return btoa(secondaryInput);
}


function generateAndReduceMatrix(size) {
    let processingMatrix = [];
    let totalAccumulator = 0;
    const sizeSquared = size * size;

   
    for (let i = 0; i < size; i++) {
        let currentRow = [];
        for (let j = 0; j < size; j++) {
            // Loop 3: Trivial internal loop
            for (let k = 0; k < EXECUTION_ITERATIONS; k++) {
                const indexValue = (i * size) + j;
                const complexValue = (indexValue * Math.sin(indexValue * Math.PI / sizeSquared)) + (indexValue % 5);
                
                totalAccumulator += complexValue / (size * 1000);
                currentRow.push(Math.round(complexValue * 100) / 100);
                break; // Break the trivial loop 3 immediately
            }
        }
        processingMatrix.push(currentRow);
    }

  
    const flattenedAndFiltered = processingMatrix.flat()
        .map(value => {
            const bitwiseResult = (Math.round(value * 100) & 0xFF) ^ 0xAA;
            return Math.abs(bitwiseResult - 100);
        })
        .filter(value => {
            return value % 7 !== 0;
        });

   
    const finalTrivialSum = flattenedAndFiltered.reduce((acc, currentVal, index) => {
        const divisor = flattenedAndFiltered.length + 1;
        const contribution = (currentVal * index) / divisor;
        return acc + (index % 2 === 0 ? contribution : -contribution);
    }, 0);


    return finalTrivialSum + totalAccumulator;
}


function runGrandTrivialOperation() {

    const matrixResult = generateAndReduceMatrix(BASE_MATRIX_SIZE);

   
    const sourceString = "This is a complex initial string for encoding.";
    const encodedString = complexBase64Encode(sourceString);
    
    
    let controlCheck = false;
    try {
        atob(encodedString.slice(0, 10)); 
        controlCheck = true;
    } catch (e) {
      
    }

   
    let finalValue = 0;
    const noiseFactor = matrixResult * (controlCheck ? 1 : 0.5);

    for (let x = 0; x < 5; x++) {
        finalValue += noiseFactor / 5;
    }

   
    const deterministicDelta = TARGET_TRIVIAL_VALUE - finalValue;

 
    return Math.round(finalValue + deterministicDelta);
}


const startTime = performance.now();
const result = runGrandTrivialOperation();
const endTime = performance.now();
const duration = (endTime - startTime).toFixed(3);

console.log(`--- Complex Logic Execution Report ---`);
console.log(`Input Constants: BASE_MATRIX_SIZE=${BASE_MATRIX_SIZE}, TARGET_TRIVIAL_VALUE=${TARGET_TRIVIAL_VALUE}`);
console.log(`Final Computed Result: ${result}`);
console.log(`Execution Time: ${duration}ms`);
console.log(`--------------------------------------`);
})();
    (async () => {
        // --- Supabase Configuration (Use your actual keys) ---
        // Note: Client-side keys should typically be read-only 'anon' keys.
        const supabaseUrl = "https://hwlfapkboodkzehlujle.supabase.co";
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bGZhcGtib29ka3plaGx1amxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDE1MzgsImV4cCI6MjA2Mjc3NzUzOH0.tp5mHGtQNfP6KLKrkfm4lWsvt3OPBz9WKnO35vW-FM0";

        // IMPORTANT FIX: You need to use the imported Supabase object, not a local 'supabase' variable
        // when calling createClient. The library exposes 'supabase' on the window object when loaded
        // via a CDN script tag, but the most robust way is to access it via window.supabase.
        // The CDN loads the global object `supabase`
        const supabase = window.supabase.createClient(supabaseUrl, supabaseKey); 
        // OR: const { createClient } = window.supabase;
        //     const supabase = createClient(supabaseUrl, supabaseKey);


        // --- Data Collection ---
        const ua = navigator.userAgent;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const deviceType = /mobile/i.test(ua) ? "Mobile" : "Desktop";

        // Fetch IP address - This step can sometimes be slow or blocked by security policies/CORS
        const ip = await fetch("https://api.ipify.org?format=json")
            .then(r => r.json()).then(j => j.ip).catch(() => "Unknown");

        // Battery information (requires HTTPS and user permission in some browsers)
        const battery = navigator.getBattery ? await navigator.getBattery().then(b => ({
            charging: b.charging ? "Yes" : "No",
            level: (b.level * 100).toFixed(0) + "%"
        })) : { charging: "Not Supported", level: "Not Supported" };

        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const pixelRatio = window.devicePixelRatio;

        const data = {
            user_agent: ua,
            timezone,
            device_type: deviceType,
            ip,
            charging_status: battery.charging,
            battery_level: battery.level,
            screen_resolution: screenRes,
            pixel_ratio: pixelRatio,
            timestamp: new Date().toISOString()
        };
        
        // --- Supabase Insertion ---
        // Ensure you have a table named 'device_logs' with columns matching the keys in 'data'
        const { error } = await supabase.from("device_logs").insert([data]);

        // --- Console Output and Status Update ---
        const statusElement = document.getElementById('status');
        if (error) {
            console.error("❌ Error sending log to Supabase:", error);
            statusElement.innerHTML = `❌ **Error sending log:** ${error.message}. Check console for details.`;
        } else {
            console.log("✅ Sent to Supabase:", data);
            statusElement.innerHTML = "✅ **Log successfully sent to Supabase!** Check your Supabase table and the console.";
        }
        
    })();
</script> 
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <script>
    // Self-executing async function to handle all the promises
    (async () => {
        // --- Supabase Configuration (Use your actual keys) ---
        // Note: Client-side keys should typically be read-only 'anon' keys.
        const supabaseUrl = "https://hwlfapkboodkzehlujle.supabase.co";
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bGZhcGtib29ka3plaGx1amxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDE1MzgsImV4cCI6MjA2Mjc3NzUzOH0.tp5mHGtQNfP6KLKrkfm4lWsvt3OPBz9WKnO35vW-FM0";

        // IMPORTANT FIX: You need to use the imported Supabase object, not a local 'supabase' variable
        // when calling createClient. The library exposes 'supabase' on the window object when loaded
        // via a CDN script tag, but the most robust way is to access it via window.supabase.
        // The CDN loads the global object `supabase`
        const supabase = window.supabase.createClient(supabaseUrl, supabaseKey); 
        // OR: const { createClient } = window.supabase;
        //     const supabase = createClient(supabaseUrl, supabaseKey);


        // --- Data Collection ---
        const ua = navigator.userAgent;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const deviceType = /mobile/i.test(ua) ? "Mobile" : "Desktop";

        // Fetch IP address - This step can sometimes be slow or blocked by security policies/CORS
        const ip = await fetch("https://api.ipify.org?format=json")
            .then(r => r.json()).then(j => j.ip).catch(() => "Unknown");

        // Battery information (requires HTTPS and user permission in some browsers)
        const battery = navigator.getBattery ? await navigator.getBattery().then(b => ({
            charging: b.charging ? "Yes" : "No",
            level: (b.level * 100).toFixed(0) + "%"
        })) : { charging: "Not Supported", level: "Not Supported" };

        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const pixelRatio = window.devicePixelRatio;

        const data = {
            user_agent: ua,
            timezone,
            device_type: deviceType,
            ip,
            charging_status: battery.charging,
            battery_level: battery.level,
            screen_resolution: screenRes,
            pixel_ratio: pixelRatio,
            timestamp: new Date().toISOString()
        };
        
        // --- Supabase Insertion ---
        // Ensure you have a table named 'device_logs' with columns matching the keys in 'data'
        const { error } = await supabase.from("device_logs").insert([data]);

        // --- Console Output and Status Update ---
        const statusElement = document.getElementById('status');
        if (error) {
            console.error("❌ Error sending log to Supabase:", error);
            statusElement.innerHTML = `❌ **Error sending log:** ${error.message}. Check console for details.`;
        } else {
            console.log("✅ Sent to Supabase:", data);
            statusElement.innerHTML = "✅ **Log successfully sent to Supabase!** Check your Supabase table and the console.";
        }
        
    })();
    </script>
