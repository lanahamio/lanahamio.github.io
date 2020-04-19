(function() {
    "use strict";
    var s, r, h, f;
    s = {
        t: function(t, i) {
            var n;
            var o = t.toString();
            var e;
            for (e = 0; e < i; e += 1) {
                n = [o.slice(0, 0), e.toString(), o.slice(0)].join("");
                o = n
            }
            return n
        },
        i: function(t) {
            var i, n;
            for (i = 0; i < t.length; i += 1) {
                n = new Image;
                n.src = t[i]
            }
        },
        o: function() {
            return Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString()
        },
        u: function(t) {
            var i = t[Math.floor(Math.random() * t.length)];
            return i
        }
    };
    r = {
        v: []
    };
    h = {
        g: {},
        init: function(t) {
            this.g = t;
            this.s(5);
            f.init();
            window.addEventListener("resize", function() {
                window.location.reload()
            })
        },
        s: function(t) {
            var i;
            for (i = 0; i < t; i += 1) {
                r.v.push(h.g.h + h.g.l + s.t(i, 1) + h.g.p)
            }
            s.i(r.v)
        },
        m: function(t) {
            var i = "";
            var n;
            var o = f.M.style.backgroundImage;
            var e = o.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
            var a = e.substring(e.lastIndexOf("/") + 1);
            if (t === "random") {
                i = s.u(r.v);
                n = i.substring(i.lastIndexOf("/") + 1);
                if (n === a) {
                    i = s.u(r.v)
                }
            } else {
                i = r.v[t + 1]
            }
            return i
        }
    };
    f = {
        init: function() {
            var t = this;
            t.I = document.createElement("div");
            t.I.style.position = "relative";
            t.I.style.backgroundColor = "#000";
            t.I.id = h.g.L;
            t.I.classList.add("bouncingdvdlogo");
            document.body.appendChild(t.I);
            t.M = document.createElement("div");
            t.M.id = "dvdbouncinglogo-logo";
            t.M.style.position = "absolute";
            t.M.style.width = h.g.S + "px";
            t.M.style.height = h.g.j + "px";
            t.I.appendChild(t.M);
            this.F();
            t.H(t.M)
        },
        F: function() {
            this.M.style.backgroundImage = "url(" + h.m("random") + ")"
        },
        H: function(t) {
            var i = this;
            var n = t.offsetWidth;
            var o = t.offsetHeight;
            var e = h.g.speed;
            var a = window.innerWidth - n / 10;
            var r = window.innerHeight - o / 10;
            var f = Math.floor(Math.random() * (a - n));
            var u = Math.floor(Math.random() * (r - o));
            var d = s.u(["right", "left"]);
            var v = s.u(["up", "down"]);

            function g() {
                if (d === "right") {
                    if (f > a - n - e) {
                        d = "left";
                        i.F()
                    }
                } else if (d === "left") {
                    if (f < e) {
                        d = "right";
                        i.F()
                    }
                }
                if (v === "down") {
                    if (u > r - o - e) {
                        v = "up";
                        i.F()
                    }
                } else if (v === "up") {
                    if (u < e) {
                        v = "down";
                        i.F()
                    }
                }
                if (d === "right") {
                    f = f + e
                } else if (d === "left") {
                    f = f - e
                }
                if (v === "down") {
                    u = u + e
                } else if (v === "up") {
                    u = u - e
                }
                t.style.left = f + "px";
                t.style.top = u + "px"
            }
            setInterval(function() {
                g()
            }, 30)
        }
    };

    function t(t) {
        var i = {
            S: t.S || 400,
            j: t.j || 200,
            speed: t.speed || 8,
            l: t.l || "neenaa_DVD_logo",
            p: t.p || ".png",
            P: 50,
            L: s.o()
        };
        h.init(i)
    }
    t({
        p: ".png",
        speed: 5
    })
})();
