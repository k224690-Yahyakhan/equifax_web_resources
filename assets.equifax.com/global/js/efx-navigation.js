$(document).ready((function() {
    document.querySelector(".efx-site-header") && function() {
        let e;
        const n = window.matchMedia("(min-width: 992px)"),
            t = $(".efx-site-navbar"),
            o = $(".efx-site-navbar .dropdown-mega");
        let s = "notset";

        function a() {
            $(".dropdown-sublevel--1").each((function() {
                "active" == $(this).data("section") && i($(this))
            })), $(".dropdown-mega-menu--level-skip .dropdown-sublevel--2:first").each((function() {
                i($(this))
            }))
        }

        function r() {
            n.matches && "desktop" != s ? ($(".navbar-supplement").insertBefore(".navbar-primary"), $(".mobile-icon").each((function() {
                $(this).hasClass("mobile-icon--main") ? $(this).appendTo(".navbar-main") : $(this).hasClass("mobile-icon--supplement") && $(this).appendTo(".navbar-main__supplement--desktop")
            })), $(".navbar-countries .collapse").collapse("show"), s = "desktop") : n.matches || "mobile" == s || ($(".navbar-primary").insertBefore(".navbar-supplement"), $(".mobile-icon").each((function() {
                $(this).appendTo(".navbar-main__supplement--mobile"), $(".navbar-main__supplement--mobile .dropdown-menu .dropdown-toggle").dropdown()
            })), $(".navbar-countries .collapse").collapse("hide"), s = "mobile")
        }

        function l() {
            let e = "",
                n = 32,
                t = n,
                o = "";
            $(".dropdown-mega-menu--multilevel.show").each((function() {
                e = $(this).find(".nav"), $(e).children().each((function() {
                    t += $(this).height()
                })), o = $(e).find(".dropdown-sublevel.show > .dropdown-sublevel__menu");
                let s = o.map((function() {
                        return $(this).height()
                    })).get(),
                    a = Math.max.apply(null, s) + n;
                t > a && (a = t), $(this).height(a)
            })), $(".dropdown-mega-menu--full.show .dropdown-mega-menu--level-skip").each((function() {
                e = $(this).find(".position-lg-static"), t = 0, $(e).children().each((function() {
                    t += $(this).outerHeight()
                })), o = $(this).find(".dropdown-sublevel.show > .dropdown-sublevel__menu");
                let n = o.map((function() {
                        return $(this).height()
                    })).get(),
                    s = Math.max.apply(null, n);
                t > s && (s = t), $(this).parents(".dropdown-mega-menu").height(s)
            }))
        }

        function i(e) {
            $(e).addClass("show").attr("aria-expanded", !0).find("> .dropdown-menu").addClass("show"), $(e).find("> .dropdown-sublevel__toggle").addClass("active")
        }

        function c(e) {
            $(e).addClass("show").attr("aria-expanded", !0).find("> .dropdown-menu").addClass("show"), $(e).parents(".navbar-primary").length ? $(e).parents(".navbar-collapse").removeClass("navbar-supplement--opened").addClass("navbar-primary--opened") : $(e).parents(".navbar-supplement").length && $(e).parents(".navbar-collapse").removeClass("navbar-primary--opened").addClass("navbar-supplement--opened"), $(e).parents(".navbar-main__supplement--mobile").length || t.addClass("menu-open"), n.matches && (t.addClass("menu-open--desktop"), l())
        }

        function d(e) {
            $(e).removeClass("show").attr("aria-expanded", !1).find("> .dropdown-menu").removeClass("show"), $(e).parents(".navbar-main__supplement--mobile").length || (($(e).parents(".navbar-primary").length || $(e).parents(".navbar-supplement").length) && $(e).parents(".navbar-collapse").removeClass("navbar-primary--opened").removeClass("navbar-supplement--opened"), t.removeClass("menu-open"), h())
        }

        function u() {
            return $(".navbar-nav > .nav-item.dropdown.show")
        }

        function m(e, t, o) {
            $(t).find(".dropdown-item.active").removeClass("active"), $(t).find(".show").removeClass("show"), $(o).addClass("active").attr("aria-expanded", !0), $(e).addClass("show").find("> .dropdown-menu").addClass("show"), $(e).hasClass("dropdown-sublevel--2") && ($(o).parent().siblings().addClass("nav-item--m-none"), $(t).closest(".dropdown-sublevel").find("> .dropdown-item").addClass("nav-item--m-none").parent().siblings().addClass("nav-item--m-none"), $(t).closest(".dropdown").find("> .nav-link").addClass("nav-item--m-none")), n.matches && l()
        }

        function p(e, n, t) {
            $(e).removeClass("show").find("> .dropdown-menu").removeClass("show"), $(t).removeClass("active").attr("aria-expanded", !1), $(e).closest(".nav-item--m-none").removeClass("nav-item--m-none"), $(e).hasClass("dropdown-sublevel--2") && ($(t).parent().siblings().removeClass("nav-item--m-none"), $(n).closest(".dropdown-sublevel").find("> .dropdown-item").removeClass("nav-item--m-none").parent().siblings().removeClass("nav-item--m-none"), $(n).closest(".dropdown").find("> .nav-link").removeClass("nav-item--m-none"))
        }

        function h() {
            $(".nav-item--m-none").removeClass("nav-item--m-none"), $(".dropdown-sublevel .show").removeClass("show"), $(".dropdown-sublevel .dropdown-item.active").attr("aria-expanded", !1).removeClass("active"), $(".dropdown-sublevel.show").removeClass("show"), a()
        }

        function v() {
            $("html").addClass("nav-open")
        }

        function f() {
            $("html").removeClass("nav-open"), d($("#efx-site-navbar__collapse .navbar-nav > .nav-item.dropdown.show"))
        }
        r(), a(), $(window).on("resize", (function(t) {
            clearTimeout(e), e = setTimeout((function() {
                r(), n.matches && l()
            }), 250)
        })), $("li.new_nav_product_link a").on("focus, mouseover", (function() {
            n.matches && (clearTimeout(e), e = setTimeout((function() {
                l()
            }), 250))
        })), $(document).on("click", (function(e) {
            let n = u();
            n !== e.target && !n.has(e.target).length && n.length && d(n)
        })), $(".efx-site-navbar .mobile-icon .dropdown-toggle").on("click", (function(e) {
            n.matches || $("#efx-site-navbar__collapse").collapse("hide")
        })), $(".efx-site-navbar .navbar-collapse .dropdown-toggle").click((function(e) {
            e.preventDefault();
            const n = $(this).parent(".dropdown");
            $(n).hasClass("show") || $(this).hasClass("mkt-form_search-select") ? $(this).hasClass("mkt-form_search-select") || d($(n)) : (d($(o)), c($(n)))
        })), $(".efx-site-navbar .navbar-main__supplement--mobile .nav-link.dropdown-toggle").click((function(e) {
            let n;
            e.preventDefault();
            const t = $(this).parent(".dropdown");
            $(t).hasClass("show") ? $(t).removeClass("show").attr("aria-expanded", !0).find("> .dropdown-menu").removeClass("show") : (n = $(".navbar-main__supplement--mobile .dropdown.show"), d(n), $(t).addClass("show").attr("aria-expanded", !0).find("> .dropdown-menu").addClass("show"))
        })), $(".efx-site-header .dropdown-sublevel__toggle").click((function(e) {
            e.preventDefault();
            let n = $(this).closest(".dropdown-sublevel"),
                t = $(n).parent(),
                o = $(this);
            $(this).hasClass("active") ? p(n, t, o) : m(n, t, o)
        })), $(".dropdown-mega-menu__close").click((function() {
            d($(this).closest(".dropdown"))
        })), $(o).on("keyup", (function(e) {
            "Enter" === e.key || 13 === e.keyCode ? c($(this)) : "Escape" !== e.key && 27 !== e.keyCode || d($(this))
        })), $(o).focusin((function(e) {
            let n = u();
            n !== e.target && !n.has(e.target).length && n.length && d(n)
        })), $("#efx-site-navbar__collapse").on("hidden.bs.collapse", (function(e) {
            $(this).is(e.target) && f()
        })), $("#efx-site-navbar__collapse").on("show.bs.collapse", (function(e) {
            $(this).is(e.target) && v(), $(".navbar-collapse .dropdown-mega.show").length && t.addClass("menu-open")
        })), $(".navbar-countries__region").click((function(e) {
            n.matches && (e.preventDefault(), e.stopPropagation())
        }))
    }()
})), document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector(".efx-n-site-header") && function() {
        let e;
        const n = window.matchMedia("(min-width: 992px)"),
            t = document.querySelector(".efx-n-site-navbar"),
            o = t.querySelector(".navbar-primary"),
            s = t.querySelector(".navbar-supplement"),
            a = t.querySelector("navbar-main"),
            r = t.querySelectorAll(".mobile-icon"),
            l = t.querySelectorAll(".dropdown-toggle");
        let i = "notset";

        function c() {
            n.matches && "desktop" != i ? (s && o && o.parentNode.insertBefore(s, o), r.forEach((e => {
                e.classList.contains("mobile-icon--main") ? a.appendChild(e) : e.classList.contains("mobile-icon--supplement") ? document.querySelector(".navbar-main__supplement--desktop").appendChild(e) : e.classList.contains("mobile-icon--utility") && document.querySelector(".navbar-utility").appendChild(e)
            })), $(".navbar-countries .collapse").collapse("show"), i = "desktop", f()) : n.matches || "mobile" == i || (o && s && s.parentNode.insertBefore(o, s), r.forEach((e => {
                document.querySelector(".navbar-main__supplement--mobile").appendChild(e)
            })), $(".navbar-countries .collapse").collapse("hide"), i = "mobile", f())
        }
        c(), B(), window.addEventListener("resize", (function(n) {
            clearTimeout(e), e = setTimeout((function() {
                c(), b(), A(), T(), w()
            }), 250)
        }));
        const d = document.querySelector(".navbar-toggler"),
            u = document.querySelector(".navbar-collapse");
        let m = !1;

        function p(e) {
            e.classList.add("show"), e.setAttribute("aria-expanded", "true");
            let t = e.querySelector(":scope > .dropdown-menu");
            t.classList.add("show"), b();
            const a = t.closest(".navbar-main") || t.closest(".navbar-utility");
            a && a.classList.add("active-child");
            const r = e.closest(".navbar-collapse");
            r && (o && o.contains(e) ? (r.classList.remove("navbar-supplement--opened"), r.classList.add("navbar-primary--opened")) : s && (r.classList.remove("navbar-primary--opened"), r.classList.add("navbar-supplement--opened")), n.matches || f(e.querySelector(":scope > .dropdown-toggle"))), n.matches && (A(), T())
        }

        function h(e) {
            k(), T(), e.classList.remove("show"), e.setAttribute("aria-expanded", "true");
            let t = e.querySelector(":scope > .dropdown-menu");
            t.classList.remove("show");
            const a = t.closest(".navbar-main") || t.closest(".navbar-utility");
            if (a && (a.classList.remove("active-child"), a.querySelector(".dropdown-toggle").classList.remove("d-none", "d-lg-flex")), !e.closest(".navbar-main__supplement--mobile")) {
                const t = e.closest(".navbar-collapse");
                t && (o || s) && (t.classList.remove("navbar-primary--opened"), t.classList.remove("navbar-supplement--opened")), n.matches || f(e.querySelector(":scope > .dropdown-toggle"))
            }
        }

        function v() {
            return document.querySelector(".navbar-nav > .nav-item.dropdown.show")
        }

        function f(e) {
            if (!t.dataset.navLabel) return;
            const n = (e, n, t = !1) => {
                if (e.parentNode.classList.contains("nav-item-locale")) {
                    const o = e.querySelector(":scope > .nav-item-locale__text"),
                        s = e.querySelector(":scope > .nav-item-locale__icon");
                    o && (o.textContent = n), s && s.classList[t ? "add" : "remove"]("d-none")
                } else e.textContent = n
            };
            if (!e) {
                if (!(e = v())) return;
                if (!(e = e.querySelector(":scope > .dropdown-toggle"))) return
            }
            if (e.dataset.ogText) n(e, e.dataset.ogText), delete e.dataset.ogText;
            else {
                if (!e.parentNode.classList.contains("show")) return;
                const o = e.parentNode.classList.contains("nav-item-locale") ? e.querySelector(":scope > .nav-item-locale__text") ? .textContent : e.textContent;
                o && (e.dataset.ogText = o), n(e, t.dataset.navLabel, !0)
            }
        }

        function b() {
            let e = v();
            if (e) {
                let t = e.querySelector(":scope > .dropdown-menu");
                if (t.style.transform = "translateX(0)", n.matches) {
                    const e = 1330,
                        n = Math.min(window.innerWidth, e),
                        o = (window.innerWidth - n) / 2,
                        s = o + n,
                        a = t.getBoundingClientRect(),
                        r = a.right - s,
                        l = o - a.left;
                    let i = 0;
                    r > 0 ? i = -r - 16 : l > 0 && (i = l + 16), t.style.transform = `translateX(${i}px)`
                }
            }
        }

        function w() {
            const e = t.querySelector(".nav-item-search");
            if (!e) return;
            const o = e.querySelector("form"),
                s = e.querySelector(".dropdown-menu"),
                a = e.offsetWidth;
            n.matches && a >= 250 ? e.insertBefore(o, e.firstChild) : s.appendChild(o)
        }
        d.addEventListener("click", (function() {
            m || (m = !0, d.classList.toggle("collapsed"), u.classList.toggle("show"), document.documentElement.classList.toggle("nav-open"), setTimeout((function() {
                u.style.transition = "", m = !1
            }), 500))
        })), document.addEventListener("click", (function(e) {
            let t = v();
            if (null !== t && t !== e.target && !t.contains(e.target)) {
                let a = !0;
                n.matches || (a = o && !o.contains(e.target) && s && !s.contains(e.target)), (n.matches || !n.matches && a) && (h(t), t = null, f())
            }
        })), l.forEach((e => {
            e.addEventListener("click", (function(n) {
                n.preventDefault();
                const t = e.parentNode;
                if (t.classList.contains("show") || e.classList.contains("mkt-form_search-select")) e.classList.contains("mkt-form_search-select") || h(t);
                else {
                    let e = v();
                    null !== e && h(e), p(t)
                }
            }))
        })), w();
        const _ = document.querySelectorAll(".submenu__header"),
            g = t.querySelectorAll(".submenu__dropdown-toggle"),
            y = t.querySelectorAll(".submenu__nav-link:not(.submenu__dropdown-toggle)");

        function C(e) {
            const n = e.parentNode;
            if (n.classList.contains("show")) S(n);
            else {
                L(n).forEach((e => {
                    S(e)
                })), q(n)
            }
            T(), b()
        }

        function q(e) {
            const t = e.closest(".active-child");
            if (t && !t.classList.contains("navbar-nav")) {
                const n = t.querySelector(":scope > .submenu__dropdown.active");
                null != n && n !== e && n.classList.remove("active")
            } else t.querySelectorAll(":scope > .show .submenu__dropdown.active").forEach((e => {
                e.classList.remove("active")
            }));
            e.classList.add("show", "active"), e.setAttribute("aria-expanded", "true");
            let o = e.querySelector(":scope > .submenu__dropdown-menu");
            o && o.classList.add("show");
            let s = e.closest(".submenu__nav");
            s && s.classList.add("active-child");
            let a = e.closest(".submenu__dropdown--root");
            if (a) {
                a.classList.add("active-child"), a.closest(".dropdown").querySelector(".dropdown-toggle").classList.add("d-none", "d-lg-flex");
                const n = a.querySelector(".submenu__back-button"),
                    t = e.closest(".submenu__nav .submenu__dropdown-menu") ? .closest(".submenu__dropdown"),
                    o = t ? .querySelector(".submenu__nav-link");
                if (n)
                    if (o) n.textContent = `Back to ${o.textContent.trim()}`;
                    else {
                        const t = e.closest(".navbar-nav");
                        if (t) {
                            const e = t.querySelector(".active-child .dropdown.show > .dropdown-toggle").dataset.ogText;
                            n.textContent = e ? `Back to ${e.trim()}` : ""
                        } else n.textContent = ""
                    }
            }
            n.matches && A()
        }

        function S(e) {
            e.classList.remove("show", "active"), e.setAttribute("aria-expanded", "false");
            let n = e.querySelector(":scope > .submenu__dropdown-menu");
            n && n.classList.remove("show");
            let t = e.closest(".submenu__nav");
            t && !t.querySelector(":scope > .submenu__nav-item > .submenu__dropdown.show") && t.classList.remove("active-child");
            let o = e.closest(".submenu__dropdown--root");
            o && !o.querySelector(".submenu__nav.active-child") && (o.classList.remove("active-child"), o.closest(".dropdown").querySelector(".dropdown-toggle").classList.remove("d-none", "d-lg-flex"));
            const s = e.closest(".submenu__dropdown-menu") ? .closest(".submenu__dropdown");
            s && s.classList.add("active")
        }

        function L(e) {
            return e = e.closest(".submenu__nav").querySelectorAll(".submenu__dropdown.show")
        }

        function x(e) {
            S(e)
        }

        function k() {
            document.querySelectorAll(".submenu__dropdown.show").forEach((e => {
                x(e)
            }))
        }

        function E() {
            document.querySelectorAll(".submenu__dropdown--root .submenu__back-button").forEach((e => {
                e.addEventListener("click", (function() {
                    const e = this.closest(".submenu__dropdown--root").querySelector(".submenu__dropdown.active");
                    if (e) {
                        S(e);
                        const n = this.closest(".submenu__dropdown--root").querySelector(".submenu__dropdown.active"),
                            t = this.closest(".submenu__dropdown--root").querySelector(".submenu__back-button");
                        if (t) {
                            const e = n ? .closest(".submenu__dropdown-menu") ? .closest(".submenu__dropdown"),
                                o = e ? .querySelector(".submenu__nav-link");
                            if (o && !e.classList.contains("submenu__dropdown--root")) t.textContent = `Back to ${o.textContent.trim()}`;
                            else {
                                const e = n ? .closest(".navbar-nav"),
                                    o = e ? .querySelector(".active-child .dropdown.show > .dropdown-toggle").dataset.ogText;
                                t.textContent = o ? `Back to ${o.trim()}` : ""
                            }
                        } else t.textContent = ""
                    }
                }))
            }))
        }

        function A() {
            const e = document.querySelectorAll(".show .submenu__dropdown-menu.show, .show .submenu__dropdown--root, .show .submenu__header-menu");
            if (e.forEach((e => {
                    e.style.height = ""
                })), n.matches) {
                if (0 === e.length) return;
                let n = 0;
                e.forEach((e => {
                    const t = e.offsetHeight;
                    n = Math.max(n, t)
                })), e.forEach((e => {
                    let t = n + 2;
                    e.classList.contains("submenu__dropdown--root") ? e.style.height = `${n}px` : e.style.height = `${t}px`
                }))
            }
        }

        function T() {
            let e = v();
            if (!e) return;
            let t = e.querySelector(":scope > .dropdown-menu");
            if (t.style.width = "", n.matches) {
                const e = t.querySelector(".submenu__dropdown--root");
                if (!e) return;
                const n = e.querySelector(":scope > .submenu__dropdown-menu");
                if (!n) return;
                let o, s = n.offsetWidth;
                o = e.querySelector(".submenu__dropdown-menu.show") ? e.querySelectorAll(".submenu__dropdown-menu.show") : e.querySelectorAll(".submenu__header-menu"), o.forEach((e => {
                    e !== n && (s += e.offsetWidth)
                })), t.style.width = `${s}px`
            }
        }

        function B() {
            t.querySelectorAll(".submenu__dropdown-menu").forEach((e => {
                const n = e.querySelector(".submenu__nav > .submenu__nav-item > .submenu__nav-link");
                if (n && n.querySelector("img")) {
                    const n = e.querySelector(".submenu__footer .mkt-link");
                    n && (n.style.marginLeft = "18px")
                }
            }))
        }
        _.forEach((e => {
            e.querySelector(".submenu__header-menu") && e.addEventListener("mouseenter", (() => {
                k()
            }))
        })), g.forEach((e => {
            e.addEventListener("mouseenter", (function(t) {
                n.matches && (e.parentNode.classList.contains("show") || C(e))
            })), e.addEventListener("click", (function(t) {
                const o = e.getAttribute("href");
                "#" !== o && null !== o || n.matches || (t.preventDefault(), C(e))
            })), e.addEventListener("keyup", (function(n) {
                if ("Enter" === n.key) {
                    const n = e.getAttribute("href");
                    "#" !== n && null !== n || q(e.parentNode)
                } else "Escape" === n.key && S(e.parentNode);
                T()
            }))
        })), y.forEach((e => {
            e.addEventListener("mouseenter", (function(e) {
                if (n.matches) {
                    let e = this.closest(".submenu__nav").querySelector(":scope > .submenu__dropdown.show");
                    if (!e) return;
                    S(e), T()
                }
            }))
        })), E();
        document.querySelectorAll(".navbar-countries__region").forEach((e => {
            e.addEventListener("click", (function(e) {
                n.matches && (e.preventDefault(), e.stopPropagation())
            }))
        }))
    }()
}));