function speedConverterMs(ms) {
            document.getElementById("mmMs").innerHTML = ms*60;
            document.getElementById("kmMs").innerHTML = ms*0.06;
            document.getElementById("khMs").innerHTML = ms*3.6;
            document.getElementById("fsMs").innerHTML = ms*3.281;
            document.getElementById("knMs").innerHTML = ms*1.944;
            document.getElementById("maMs").innerHTML = ms/343;
            document.getElementById("mpMs").innerHTML = ms*2.237;
}
      function speedConverterMm(mm) {
            document.getElementById("msMm").innerHTML = mm*0.0166667;
            document.getElementById("kmMm").innerHTML = mm/1000;
            document.getElementById("khMm").innerHTML = mm/16.667;
            document.getElementById("fsMm").innerHTML = mm/18.288;
            document.getElementById("knMm").innerHTML = mm/30.867;
            document.getElementById("maMm").innerHTML = mm/20580;
            document.getElementById("mpMm").innerHTML = mm/26.822;
      }
      function speedConverterKm(km) {
            document.getElementById("msKm").innerHTML = km/16.667;
            document.getElementById("mmKm").innerHTML = km*1000;
            document.getElementById("khKm").innerHTML = km*60;
            document.getElementById("fsKm").innerHTML = km*54.681;
            document.getElementById("knKm").innerHTML = km*32.397;
            document.getElementById("maKm").innerHTML = km/20.58;
            document.getElementById("mpKm").innerHTML = km*37.282;
      }
      function speedConverterKh(kh) {
            document.getElementById("msKh").innerHTML = kh/3.6;
            document.getElementById("mmKh").innerHTML = kh*16.667;
            document.getElementById("kmKh").innerHTML = kh/60;
            document.getElementById("fsKh").innerHTML = kh/1.097;
            document.getElementById("knKh").innerHTML = kh/1.852;
            document.getElementById("maKh").innerHTML = kh/1234.8;
            document.getElementById("mpKh").innerHTML = kh*1.609;
      }
      function speedConverterFs(fs) {
            document.getElementById("msFs").innerHTML = fs/3.281;
            document.getElementById("mmFs").innerHTML = fs*18.288;
            document.getElementById("kmFs").innerHTML = fs/54.681;
            document.getElementById("khFs").innerHTML = fs*1.097;
            document.getElementById("knFs").innerHTML = fs/1.688;
            document.getElementById("maFs").innerHTML = fs/1125.328;
            document.getElementById("mpFs").innerHTML = fs*1.097;
      }
      function speedConverterKn(kn) {
            document.getElementById("msKn").innerHTML = kn/1.944;
            document.getElementById("mmKn").innerHTML = kn*30.867;
            document.getElementById("kmKn").innerHTML = kn/32.397;
            document.getElementById("khKn").innerHTML = kn*1.852;
            document.getElementById("fsKn").innerHTML = kn*1.688;
            document.getElementById("maKn").innerHTML = kn/666.739;
            document.getElementById("mpKn").innerHTML = kn*1.151;
      }

      function speedConverterMa(ma) {
            document.getElementById("msMa").innerHTML = ma*343;
            document.getElementById("mmMa").innerHTML = ma*20580;
            document.getElementById("kmMa").innerHTML = ma*20.58;
            document.getElementById("khMa").innerHTML = ma*1234.8;
            document.getElementById("fsMa").innerHTML = ma*1125.328;
            document.getElementById("knMa").innerHTML = ma*666.739;
            document.getElementById("mpMa").innerHTML = ma*767.269;
      }

      function speedConverterMp(mp) {
            document.getElementById("msMp").innerHTML = mp/2.237;
            document.getElementById("mmMp").innerHTML = mp*26.822;
            document.getElementById("kmMp").innerHTML = mp/37.282;
            document.getElementById("khMp").innerHTML = mp*1609;
            document.getElementById("fsMp").innerHTML = mp*1.467;
            document.getElementById("knMp").innerHTML = mp/1.151;
            document.getElementById("maMp").innerHTML = mp/767.269;
      }

      //Panjang(Jarak)

      function lengthConverter(ft) {
            document.getElementById("mm").innerHTML = ft*304.8;
            document.getElementById("ly").innerHTML = ft/3.104e+16;
            document.getElementById("dm").innerHTML = ft*3.048;
            document.getElementById("m").innerHTML = ft/3.2808;
            document.getElementById("in").innerHTML = ft*12;
            document.getElementById("cm").innerHTML = ft/0.032808;
            document.getElementById("yd").innerHTML = ft*0.33333;
            document.getElementById("km").innerHTML = ft/3280.8;
            document.getElementById("mi").innerHTML = ft*0.00018939;
            document.getElementById("nmi").innerHTML = ft/6076.115;
      }
      function lengthConverterM(m) {
            document.getElementById("mmM").innerHTML = m*1000;
            document.getElementById("lyM").innerHTML = m/9.461e+15;
            document.getElementById("dmM").innerHTML = m*10;
            document.getElementById("ftM").innerHTML = m*3.2808;
            document.getElementById("inM").innerHTML = m*39.370;
            document.getElementById("cmM").innerHTML = m/0.01;
            document.getElementById("ydM").innerHTML = m*1.0936;
            document.getElementById("kmM").innerHTML = m/1000;
            document.getElementById("miM").innerHTML = m*0.00062137;
            document.getElementById("nmiM").innerHTML = m/1852;
      }
      function lengthConverterI(inch) {
            document.getElementById("mmI").innerHTML = inch*25,4;
            document.getElementById("lyI").innerHTML = inch/3.725e+17;
            document.getElementById("dmI").innerHTML = inch/3.937;
            document.getElementById("ftI").innerHTML = inch*0.083333;
            document.getElementById("mI").innerHTML = inch/39.370;
            document.getElementById("cmI").innerHTML = inch/0.39370;
            document.getElementById("ydI").innerHTML = inch*0.027778;
            document.getElementById("kmI").innerHTML = inch/39370;
            document.getElementById("miI").innerHTML = inch*0.000015783;
            document.getElementById("nmiI").innerHTML = inch/72913.386;
      }
      function lengthConverterC(cm) {
            document.getElementById("mmC").innerHTML = cm*10;
            document.getElementById("lyC").innerHTML = cm/1.057e+17;
            document.getElementById("dmC").innerHTML = cm/10;
            document.getElementById("ftC").innerHTML = cm*0.032808;
            document.getElementById("mC").innerHTML = cm/100;
            document.getElementById("inC").innerHTML = cm*0.39370;
            document.getElementById("ydC").innerHTML = cm*0.010936;
            document.getElementById("kmC").innerHTML = cm/100000;
            document.getElementById("miC").innerHTML = cm*0.0000062137;
            document.getElementById("nmiC").innerHTML = cm/185200;
      }
      function lengthConverterY(yd) {
            document.getElementById("mmY").innerHTML = yd*914.4;
            document.getElementById("lyY").innerHTML = yd/1.035e+16;
            document.getElementById("dmY").innerHTML = yd*9.144;
            document.getElementById("ftY").innerHTML = yd*3;
            document.getElementById("mY").innerHTML = yd/1.094;
            document.getElementById("inY").innerHTML = yd*36;
            document.getElementById("cmY").innerHTML = yd*91.44;
            document.getElementById("kmY").innerHTML = yd/1093.613;
            document.getElementById("miY").innerHTML = yd*1760;
            document.getElementById("nmiY").innerHTML = yd*2025.372;
      }
      function lengthConverterK(km) {
            document.getElementById("mmK").innerHTML = km*1000000;
            document.getElementById("lyK").innerHTML = km/9.461e+12;
            document.getElementById("dmK").innerHTML = km*10000;
            document.getElementById("ftK").innerHTML = km*3280.84;
            document.getElementById("mK").innerHTML = km*1000;
            document.getElementById("inK").innerHTML = km*39370.079;
            document.getElementById("cmK").innerHTML = km*100000;
            document.getElementById("ydK").innerHTML = km*1093.613;
            document.getElementById("miK").innerHTML = km/1.609;
            document.getElementById("nmiK").innerHTML = km/1.852;
      }
      function lengthConverterMi(mi) {
            document.getElementById("mmMi").innerHTML = mi*1.609e+6;
            document.getElementById("lyMi").innerHTML = mi/5.879e+12;
            document.getElementById("dmMi").innerHTML = mi*16093.44;
            document.getElementById("ftMi").innerHTML = mi*5280;
            document.getElementById("mMi").innerHTML = mi/1609.344;
            document.getElementById("inMi").innerHTML = mi*63360;
            document.getElementById("cmMi").innerHTML = mi*160934.4;
            document.getElementById("ydMi").innerHTML = mi*1760;
            document.getElementById("kmMi").innerHTML = mi/1760;
            document.getElementById("nmiMi").innerHTML = mi/1.151;
      }
      function lengthConverterMm(mm) {
            
            document.getElementById("lyMm").innerHTML = mm/9.461e+18;
            document.getElementById("dmMm").innerHTML = mm/100;
            document.getElementById("ftMm").innerHTML = mm/304.8;
            document.getElementById("mMm").innerHTML = mm/1000;
            document.getElementById("inMm").innerHTML = mm/25.4;
            document.getElementById("cmMm").innerHTML = mm/10;
            document.getElementById("ydMm").innerHTML = mm/914.4;
            document.getElementById("kmMm").innerHTML = mm/1e+6;
            document.getElementById("miMm").innerHTML = mm/1.609e+6;
            document.getElementById("nmiMm").innerHTML = mm/1.852e+6;
      }
      function lengthConverterL(ly) {
            
            document.getElementById("mmL").innerHTML = ly*9.461e+18;
            document.getElementById("dmL").innerHTML = ly*9.461e+16;
            document.getElementById("ftL").innerHTML = ly*3.104e+16;
            document.getElementById("mL").innerHTML = ly*9.461e+15;
            document.getElementById("inL").innerHTML = ly*3.725e+17;
            document.getElementById("cmL").innerHTML = ly*9.461e+17;
            document.getElementById("ydL").innerHTML = ly*1.035e+16;
            document.getElementById("kmL").innerHTML = ly*9.461e+12;
            document.getElementById("miL").innerHTML = ly*5.879e+12;
            document.getElementById("nmiL").innerHTML = ly*5.108e12;
      }
      function lengthConverterD(dm) {
            
            document.getElementById("mmD").innerHTML = dm*100;
            document.getElementById("lyD").innerHTML = dm/9.461e+16;
            document.getElementById("ftD").innerHTML = dm/3.048;
            document.getElementById("mD").innerHTML = dm/10;
            document.getElementById("inD").innerHTML = dm*3.937;
            document.getElementById("cmD").innerHTML = dm*10;
            document.getElementById("ydD").innerHTML = dm/9.144;
            document.getElementById("kmD").innerHTML = dm/10000;
            document.getElementById("miD").innerHTML = dm/16093.44;
            document.getElementById("nmiD").innerHTML = dm/18520;
      }
      function lengthConverterN(nmi) {
            
            document.getElementById("mmN").innerHTML = nmi*1.852e+16;
            document.getElementById("dmN").innerHTML = nmi*18520;
            document.getElementById("lyN").innerHTML = nmi/5.108e+12;
            document.getElementById("ftN").innerHTML = nmi*6076.115;
            document.getElementById("mN").innerHTML = nmi*1852;
            document.getElementById("inN").innerHTML = nmi*72913.386;
            document.getElementById("cmN").innerHTML = nmi*185200;
            document.getElementById("ydN").innerHTML = nmi*2025.372;
            document.getElementById("kmN").innerHTML = nmi*1.852;
            document.getElementById("miN").innerHTML = nmi*1.151;
      }

      //MASSA
      function weightConverterMg(mg) {
            document.getElementById("gMg").innerHTML = mg*0.001;
            document.getElementById("grMg").innerHTML = mg*0.015432;
            document.getElementById("uMg").innerHTML = mg*6.022e+20;
            document.getElementById("ozMg").innerHTML = mg*0.0000352739;
            document.getElementById("kgMg").innerHTML = mg*0.000001;
            document.getElementById("ctMg").innerHTML = mg*0.005;
            document.getElementById("lbMg").innerHTML = mg*0.0000022046;
            document.getElementById("tonMg").innerHTML = mg/1.016e+9;
            document.getElementById("tMg").innerHTML = mg*0.000000001;

      }
      function weightConverterG(g) {
            document.getElementById("mgG").innerHTML = g*1000;
            document.getElementById("grG").innerHTML = g*15.4323;
            document.getElementById("ozG").innerHTML = g*0.035274;
            document.getElementById("uG").innerHTML = g*6.022e+23;
            document.getElementById("kgG").innerHTML = g*0.001;
            document.getElementById("ctG").innerHTML = g*5;
            document.getElementById("lbG").innerHTML = g*0.00220462;
            document.getElementById("tonG").innerHTML = g/1.016e+6;
            document.getElementById("tG").innerHTML = g*0.000001;
      }
      function weightConverterGr(gr) {
            document.getElementById("mgGr").innerHTML = gr*64.799;
            document.getElementById("gGr").innerHTML = gr*0.064799;
            document.getElementById("ozGr").innerHTML = gr*0.00228571;
            document.getElementById("uGr").innerHTML = gr*3.902e+22;
            document.getElementById("kgGr").innerHTML = gr*0.000064799;
            document.getElementById("ctGr").innerHTML = gr*0.323995;
            document.getElementById("lbGr").innerHTML = gr*0.00014286;
            document.getElementById("tonGr").innerHTML = gr/1.568e+7;
            document.getElementById("tGr").innerHTML = gr/1.543e+7;
      }
      function weightConverterOz(oz) {
            document.getElementById("mgOz").innerHTML = oz*28349.54;
            document.getElementById("gOz").innerHTML = oz*28.3495;
            document.getElementById("grOz").innerHTML = oz*437.5;
            document.getElementById("uOz").innerHTML = oz*1.707e+25;
            document.getElementById("kgOz").innerHTML = oz*0.02835;
            document.getElementById("ctOz").innerHTML = oz*141.75;
            document.getElementById("lbOz").innerHTML = oz*0.0625;
            document.getElementById("tonOz").innerHTML = oz/35840;
            document.getElementById("tOz").innerHTML = oz*0.0000283495;
      }
      function weightConverterKg(kg) {
            document.getElementById("mgKg").innerHTML = kg*1000000;
            document.getElementById("gKg").innerHTML = kg*1000;
            document.getElementById("grKg").innerHTML = kg*15432.35;
            document.getElementById("uKg").innerHTML = kg*6.022e+26;
            document.getElementById("ozKg").innerHTML = kg*35.2739;
            document.getElementById("ctKg").innerHTML = kg*5000;
            document.getElementById("lbKg").innerHTML = kg*2.2046;
            document.getElementById("tonKg").innerHTML = kg/1016.47;
            document.getElementById("tKg").innerHTML = kg*0.001;
      }
      function weightConverterCt(ct) {
            document.getElementById("mgCt").innerHTML = ct*200;
            document.getElementById("gCt").innerHTML = ct*0.2;
            document.getElementById("ozCt").innerHTML = ct*0.00705479;
            document.getElementById("uCt").innerHTML = ct*1.204e+23;
            document.getElementById("kgCt").innerHTML = ct*0.0002;
            document.getElementById("lbCt").innerHTML = ct*0.00044092;
            document.getElementById("tonCt").innerHTML = ct/5.08e+6;
            document.getElementById("tCt").innerHTML = ct*0.0000002;
      }
      function weightConverterLb(lb) {
            document.getElementById("mgLb").innerHTML = lb*453592.37;
            document.getElementById("gLb").innerHTML = lb*453.59;
            document.getElementById("grLb").innerHTML = lb*7000;
            document.getElementById("uLb").innerHTML = lb*2.732e+26;
            document.getElementById("ozLb").innerHTML = lb*16;
            document.getElementById("kgLb").innerHTML = lb*0.453592;
            document.getElementById("ctLb").innerHTML = lb*2267.96;
            document.getElementById("tonLb").innerHTML = lb/2240;
            document.getElementById("tLb").innerHTML = lb*0.00045359;
      }
      function weightConverterT(ton) {
            document.getElementById("mgT").innerHTML = ton*1.016e+9;
            document.getElementById("gT").innerHTML = ton*1.016e+6;
            document.getElementById("grT").innerHTML = ton*1.568e+7;
            document.getElementById("uT").innerHTML = ton*6.119e+29;
            document.getElementById("ozT").innerHTML = ton*35840;
            document.getElementById("kgT").innerHTML = ton*1016.047;
            document.getElementById("ctT").innerHTML = ton*5.08e+6;
            document.getElementById("lbT").innerHTML = ton*2240;
            document.getElementById("tT").innerHTML = ton*1.016;
      }
      function weightConverterTt(t) {
            document.getElementById("mgTt").innerHTML = t*1e+9;
            document.getElementById("gTt").innerHTML = t*1e+6;
            document.getElementById("grTt").innerHTML = t*1.543e+7;
            document.getElementById("uTt").innerHTML = t*6.022e+29;
            document.getElementById("ozTt").innerHTML = t*35274;
            document.getElementById("kgTt").innerHTML = t*1000;
            document.getElementById("ctTt").innerHTML = t*5e+6;
            document.getElementById("lbTt").innerHTML = t*2204.62;
            document.getElementById("tonTt").innerHTML = t/1.016;
      }
      function weightConverterU(u) {
            document.getElementById("mgU").innerHTML = u/6.022e+20;
            document.getElementById("gU").innerHTML = u/6.022e+23;
            document.getElementById("grU").innerHTML = u/3.902e+22;
            document.getElementById("ozU").innerHTML = u/1.707e+25;
            document.getElementById("kgU").innerHTML = u/6.022e+26;
            document.getElementById("ctU").innerHTML = u/1.204e+23;
            document.getElementById("lbU").innerHTML = u/2.732e+26;
            document.getElementById("tonU").innerHTML = u/6.119e+29;
            document.getElementById("tU").innerHTML = u/6.022e+29;
}