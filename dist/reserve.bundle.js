!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 16));
})([
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var a = n(1);
    function r() {
      const e = Array.prototype.slice.call(arguments),
        t = e.shift();
      let n = Object(a.g)();
      const r = t.split(".");
      let o;
      for (
        let e = 0;
        e < r.length && ((o = n[r[e]]), "string" != typeof o);
        e++
      )
        n = n[r[e]];
      for (let t = 0; t < e.length; t++) o = o.replace("{}", e[t]);
      return o;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return d;
    }),
      n.d(t, "g", function () {
        return u;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return v;
      });
    const a = { ja: n(5), "en-US": n(6) },
      r = { ja: n(7), "en-US": n(8) },
      o = {
        ja: new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
          currencyDisplay: "name",
        }),
        "en-US": new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          currencyDisplay: "symbol",
        }),
      },
      i = {
        ja: new Intl.DateTimeFormat("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        "en-US": new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
      l = {
        ja: function (e) {
          return (
            e.getFullYear() + "/" + g(e.getMonth() + 1) + "/" + g(e.getDate())
          );
        },
        "en-US": function (e) {
          return (
            g(e.getMonth() + 1) + "/" + g(e.getDate()) + "/" + e.getFullYear()
          );
        },
      },
      s = {
        ja: function (e) {
          const t = e.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
          if (!t || 4 !== t.length) return null;
          const n = parseInt(t[1], 10),
            a = parseInt(t[2], 10),
            r = parseInt(t[3], 10);
          return new Date(n, a - 1, r);
        },
        "en-US": function (e) {
          const t = e.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
          if (!t || 4 !== t.length) return null;
          const n = parseInt(t[3], 10),
            a = parseInt(t[1], 10),
            r = parseInt(t[2], 10);
          return new Date(n, a - 1, r);
        },
      },
      c = { ja: 1e3, "en-US": 10 };
    function d() {
      return $("html").attr("lang");
    }
    function u(e) {
      return (e = void 0 !== e ? e : d()), a[e];
    }
    function m(e) {
      return (e = void 0 !== e ? e : d()), r[e];
    }
    function f(e) {
      return (e = void 0 !== e ? e : d()), o[e];
    }
    function p(e) {
      return (e = void 0 !== e ? e : d()), i[e];
    }
    function h(e) {
      return (e = void 0 !== e ? e : d()), l[e];
    }
    function b(e) {
      return (e = void 0 !== e ? e : d()), s[e];
    }
    function v(e) {
      return (e = void 0 !== e ? e : d()), c[e];
    }
    function g(e) {
      return e < 10 ? "0" + e : "" + e;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return r;
    }),
      n.d(t, "g", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "h", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "k", function () {
        return f;
      }),
      n.d(t, "a", function () {
        return p;
      });
    var a = n(1);
    function r(e) {
      const t = Object(a.h)();
      let n = null;
      for (let a = 0; a < t.length; a++)
        if (t[a].email === e) {
          n = t[a];
          break;
        }
      return n
        ? ((n.preset = !0), n)
        : ((n = localStorage.getItem(e)), n ? JSON.parse(n) : null);
    }
    function o(e, t) {
      const n = r(e);
      return n && n.password === t;
    }
    function i() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)session\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }
    function l(e) {
      document.cookie = "session=" + e + "; max-age=630720000";
    }
    function s() {
      document.cookie = "session=; max-age=0";
    }
    function c() {
      return "" + (Math.floor(9e9 * Math.random()) + 1e9);
    }
    function d() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)transaction\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }
    function u() {
      document.cookie = "transaction=; max-age=0";
    }
    function m() {
      let e;
      (e =
        2 === location.pathname.split("/").length
          ? location.pathname.replace(/(\/.+\.html)/, "/index.html")
          : location.pathname.replace(/(\/.+)(\/.+\.html)/, "$1/index.html")),
        location.assign(location.origin + e);
    }
    function f() {
      $("#signup-holder").removeClass("d-block").addClass("d-none"),
        $("#login-holder").removeClass("d-block").addClass("d-none"),
        $("#mypage-holder").removeClass("d-none").addClass("d-block"),
        $("#logout-holder").removeClass("d-none").addClass("d-block"),
        $("#logout-form").submit(function () {
          s();
        });
    }
    function p(e, t) {
      return (
        !e.only ||
        (!!t &&
          ("member" === e.only ||
            ("premium" === e.only ? "premium" === t.rank : void 0)))
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return d;
      });
    var a = n(1);
    function r(e) {
      return Object(a.b)().format(e);
    }
    function o(e) {
      return Object(a.c)().format(e);
    }
    function i(e) {
      return Object(a.d)()(e);
    }
    function l(e) {
      return Object(a.e)()(e);
    }
    function s(e) {
      return e < 10 ? "0" + e : "" + e;
    }
    function c(e) {
      return e.getFullYear() + "-" + s(e.getMonth() + 1) + "-" + s(e.getDate());
    }
    function d(e) {
      const t = e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      if (!t || 4 !== t.length) return null;
      const n = parseInt(t[1], 10),
        a = parseInt(t[2], 10),
        r = parseInt(t[3], 10);
      return new Date(n, a - 1, r);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return i;
      });
    var a = n(0);
    function r(e) {
      e.each(function () {
        this.setCustomValidity("");
      });
    }
    function o(e) {
      e.each(function () {
        $(this)
          .nextAll(".invalid-feedback")
          .text(
            (function (e) {
              if (e.validity.customError) return e.validationMessage;
              if (e.validity.valueMissing)
                return Object(a.a)("validation.valueMissing");
              if (e.validity.typeMismatch)
                return "email" === e.type
                  ? Object(a.a)("validation.typeMismatch.email")
                  : "url" === e.type
                  ? Object(a.a)("validation.typeMismatch.url")
                  : Object(a.a)("validation.badInput");
              if (e.validity.tooLong)
                return Object(a.a)("validation.tooLong", e.maxLength);
              if (e.validity.tooShort)
                return Object(a.a)("validation.tooShort", e.minLength);
              if (e.validity.rangeOverflow)
                return Object(a.a)("validation.rangeOverflow", e.max);
              if (e.validity.rangeUnderflow)
                return Object(a.a)("validation.rangeUnderflow", e.min);
              if (e.validity.stepMismatch)
                return Object(a.a)("validation.badInput");
              if (e.validity.badInput)
                return Object(a.a)("validation.badInput");
              if (e.validity.patternMismatch)
                return Object(a.a)("validation.patternMismatch");
            })(this)
          );
      });
    }
    function i(e) {
      if (!e) return Object(a.a)("validation.badInput");
      {
        const t = new Date(),
          n = new Date();
        if ((n.setDate(n.getDate() + 90), e.getTime() < t.getTime()))
          return Object(a.a)("validation.shoudBeNextDay");
        if (e.getTime() > n.getTime())
          return Object(a.a)("validation.shouldBeThreeMonth");
      }
    }
  },
  function (e) {
    e.exports = JSON.parse(
      '{"validation":{"valueMissing":"このフィールドを入力してください。","typeMismatch":{"email":"メールアドレスを入力してください。","url":"URLを入力してください。"},"badInput":"有効な値を入力してください。","patternMismatch":"指定されている形式で入力してください。","tooLong":"{}文字以内で入力してください。","tooShort":"{}文字以上で入力してください。","rangeOverflow":"{}以下の値を入力してください。","rangeUnderflow":"{}以上の値を入力してください。","stepMismatch":"有効な値を入力してください。","shoudBeNextDay":"翌日以降の日付を入力してください。","shouldBeThreeMonth":"3ヶ月以内の日付を入力してください。","mailOrAddressMismatch":"メールアドレスまたはパスワードが違います。","existsMail":"このメールアドレスはすでに登録済みです。","passwordUnmatch":"入力されたパスワードと一致しません。","underTenKb":"ファイルサイズは10KB以下にしてください。","onlyImageFile":"画像ファイルを選択してください。"},"user":{"gender":{"unregistered":"未登録","male":"男性","female":"女性","other":"その他"},"rank":{"premium":"プレミアム会員","normal":"一般会員"},"unregistered":"未登録","notification":{"true":"受け取る","false":"受け取らない"},"deleteConfirm":"退会すると全ての情報が削除されます。\\nよろしいですか？","deleteComplete":"退会処理を完了しました。ご利用ありがとうございました。"},"plans":{"premiumOnly":"❤️プレミアム会員限定❤️","memberOnly":"会員限定","oneAdult":"大人1名{}","minHeadCount":"{}名様から","reserveLink":"このプランで予約"},"reserve":{"planDescLong":"お一人様1泊{}〜、土日は25%アップ。{}名様〜{}名様、最長{}泊","planDescShort":"お一人様1泊{}〜、土日は25%アップ","roomInfo":"部屋情報","totalBill":"合計 {}（税込み）","term":"{} 〜 {} {}泊","headCount":"{}名様","breakfast":"朝食バイキング","earlyCheckIn":"昼からチェックインプラン","sightseeing":"お得な観光プラン","none":"なし","username":"{}様","contact":{"no":"希望しない","email":"メール：{}","tel":"電話：{}"}}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"validation":{"valueMissing":"Please fill out this field.","typeMismatch":{"email":"Please enter a non-empty email address.","url":"Please enter a non-empty URL."},"badInput":"Please enter a valid value.","patternMismatch":"Please match the requested format.","tooLong":"Please shorten this text to {} characters or less.","tooShort":"Please lengthen this text to {} characters or more.","rangeOverflow":"Value must be less than or equal to {}.","rangeUnderflow":"Value must be greater than or equal to {}.","stepMismatch":"Please enter a valid value.","shoudBeNextDay":"Please enter a date after tomorrow.","shouldBeThreeMonth":"Please enter a date within 3 months.","mailOrAddressMismatch":"Email or password is invalid.","existsMail":"Email has already been taken.","passwordUnmatch":"Password doesn\'t match.","underTenKb":"Please select a file with a size of 10 KB or less.","onlyImageFile":"Please select an image file."},"user":{"gender":{"unregistered":"not answered","male":"male","female":"female","other":"other"},"rank":{"premium":"Premium","normal":"Normal"},"unregistered":"not answered","notification":{"true":"received","false":"not received"},"deleteConfirm":"If you cancel your membership, all information will be deleted.\\nDo you wish to proceed?","deleteComplete":"The process has been completed. Thank you for your service."},"plans":{"premiumOnly":"❤️Premium members ONLY❤️","memberOnly":"members ONLY","oneAdult":"{} per guest","minHeadCount":"at least {} person(s)","reserveLink":"Reserve room"},"reserve":{"planDescLong":"{} per night. If contains Sun or Sat, plus 25%. {} - {} persons. Max {} nights","planDescShort":"{} per night. If contains Sun or Sat, plus 25%.","roomInfo":"Room info","totalBill":"Total {} (included taxes)","term":"{} - {}. {} night(s)","headCount":"{} person(s)","breakfast":"Breakfast","earlyCheckIn":"Early check-in","sightseeing":"Sightseeing","none":"none","username":"{}","contact":{"no":"not required","email":"Email: {}","tel":"Tel: {}"}}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"email":"ichiro@example.com","password":"password","username":"山田一郎","rank":"premium","address":"東京都豊島区池袋","tel":"01234567891","gender":"1","birthday":"","notification":true},{"email":"sakura@example.com","password":"pass1234","username":"松本さくら","rank":"normal","address":"神奈川県横浜市鶴見区大黒ふ頭","tel":"","gender":"2","birthday":"2000-04-01","notification":false},{"email":"jun@example.com","password":"pa55w0rd!","username":"林潤","rank":"premium","address":"大阪府大阪市北区梅田","tel":"01212341234","gender":"9","birthday":"1988-12-17","notification":false},{"email":"yoshiki@example.com","password":"pass-pass","username":"木村良樹","rank":"normal","address":"","tel":"01298765432","gender":"0","birthday":"1992-08-31","notification":true}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"email":"clark@example.com","password":"password","username":"Clark Evans","rank":"premium","address":"Mountain View, California","tel":"01234567891","gender":"1","birthday":"","notification":true},{"email":"diana@example.com","password":"pass1234","username":"Diana Johansson","rank":"normal","address":"Redmond, Washington","tel":"","gender":"2","birthday":"2000-04-01","notification":false},{"email":"ororo@example.com","password":"pa55w0rd!","username":"Ororo Saldana","rank":"premium","address":"Cupertino, California","tel":"01212341234","gender":"9","birthday":"1988-12-17","notification":false},{"email":"miles@example.com","password":"pass-pass","username":"Miles Boseman","rank":"normal","address":"","tel":"01298765432","gender":"0","birthday":"1992-08-31","notification":true}]'
    );
  },
  function (e, t, n) {
    "use strict";
    function a(e, t, n, a, r, o, i, l) {
      let s = e * a * n;
      for (let r = 0; r < n; r++) {
        const n = new Date(t.getFullYear(), t.getMonth(), t.getDate());
        n.setDate(n.getDate() + r),
          (0 !== n.getDay() && 6 !== n.getDay()) || (s += 0.25 * e * a);
      }
      return r && (s += l * a * n), o && (s += l * a), i && (s += l * a), s;
    }
    n.d(t, "a", function () {
      return a;
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(3),
      r = n(1),
      o = n(2),
      i = n(4),
      l = n(9),
      s = n(0);
    $(function () {
      const e = Object(o.d)(),
        t = Object(o.f)(e),
        n = location.search.match(/^\?plan-id=(\d+)$/);
      if (!n || 2 !== n.length) return void Object(o.j)();
      const c = parseInt(n[1], 10),
        d =
          location.origin +
          "/hotel-example-site/data/" +
          Object(r.f)() +
          "/plan_data.json?" +
          Date.now();
      $.getJSON(d).done(function (e) {
        let n = null;
        for (let t = 0; t < e.length; t++)
          if (e[t].id === c) {
            n = e[t];
            break;
          }
        if (!n || !Object(o.a)(n, t)) return void Object(o.j)();
        $("#plan-name").text(n.name),
          $("#plan-desc").text(
            Object(s.a)(
              "reserve.planDescLong",
              Object(a.a)(n.roomBill),
              n.minHeadCount,
              n.maxHeadCount,
              n.maxTerm
            )
          ),
          $("#plan-id-hidden").val(n.id),
          $("#plan-name-hidden").val(n.name),
          $("#room-bill-hidden").val(n.roomBill),
          $("#term")
            .attr("min", n.minTerm)
            .attr("max", n.maxTerm)
            .val(n.minTerm),
          $("#head-count")
            .attr("min", n.minHeadCount)
            .attr("max", n.maxHeadCount)
            .val(n.minHeadCount);
        const i = new Date();
        i.setDate(i.getDate() + 1), $("#accommodation").val(Object(a.d)(i));
        const d = Object(l.a)(
          n.roomBill,
          i,
          n.minTerm,
          n.minHeadCount,
          !1,
          !1,
          !1,
          Object(r.a)()
        );
        $("#total-bill").text(Object(a.a)(d)),
          n.roomPage &&
            ($("<iframe></iframe>", {
              class: "embed-responsive-item",
              src: "./rooms/" + n.roomPage,
              title: Object(s.a)("reserve.roomInfo"),
              name: "room",
            }).appendTo("#room-info"),
            $("#room-info").addClass("embed-responsive embed-responsive-1by1")),
          $("#confirm-button").prop("disabled", !1);
      }),
        t &&
          ($("#username").val(t.username),
          $("#email").val(t.email),
          $("#tel").val(t.tel)),
        $("#accommodation").datepicker({
          showButtonPanel: !0,
          maxDate: 90,
          minDate: 1,
          onSelect: function () {
            $(this).change();
          },
        }),
        $("#contact").change(function () {
          "no" === $(this).val()
            ? ($("#email")
                .prop("disabled", !0)
                .prop("required", !1)
                .parent()
                .removeClass("d-block")
                .addClass("d-none"),
              $("#tel")
                .prop("disabled", !0)
                .prop("required", !1)
                .parent()
                .removeClass("d-block")
                .addClass("d-none"))
            : "email" === $(this).val()
            ? ($("#email")
                .prop("disabled", !1)
                .prop("required", !0)
                .parent()
                .removeClass("d-none")
                .addClass("d-block"),
              $("#tel")
                .prop("disabled", !0)
                .prop("required", !1)
                .parent()
                .removeClass("d-block")
                .addClass("d-none"))
            : "tel" === $(this).val() &&
              ($("#email")
                .prop("disabled", !0)
                .prop("required", !1)
                .parent()
                .removeClass("d-block")
                .addClass("d-none"),
              $("#tel")
                .prop("disabled", !1)
                .prop("required", !0)
                .parent()
                .removeClass("d-none")
                .addClass("d-block"));
        }),
        $(".needs-calc").change(function () {
          if (
            (Object(i.a)($(this)),
            "date" === $(this).attr("id") &&
              $("#accommodation")[0].checkValidity())
          ) {
            const e = Object(i.c)(Object(a.e)($("#accommodation").val()));
            e && $("#accommodation")[0].setCustomValidity(e);
          }
          $("#accommodation")[0].checkValidity() &&
          $("#term")[0].checkValidity() &&
          $("#head-count")[0].checkValidity()
            ? ($("#accommodation").parent().removeClass("was-validated"),
              $("#term").parent().removeClass("was-validated"),
              $("#head-count").parent().removeClass("was-validated"),
              (function () {
                const e = Object(a.e)($("#accommodation").val());
                if (!e) return;
                const t = parseInt($("#room-bill-hidden").val(), 10),
                  n = parseInt($("#term").val(), 10),
                  o = parseInt($("#head-count").val(), 10),
                  i = Object(l.a)(
                    t,
                    e,
                    n,
                    o,
                    $("#breakfast").prop("checked"),
                    $("#early-check-in").prop("checked"),
                    $("#sightseeing").prop("checked"),
                    Object(r.a)()
                  );
                $("#total-bill").text(Object(a.a)(i));
              })())
            : ($("#total-bill").text("-"),
              Object(i.b)($(".needs-calc")),
              $(this).parent().addClass("was-validated"));
        }),
        $("#reserve-form").submit(function () {
          Object(i.a)($(this).find("input"));
          const e = Object(a.e)($("#accommodation").val());
          if ($("#accommodation")[0].checkValidity()) {
            const t = Object(i.c)(e);
            t && $("#accommodation")[0].setCustomValidity(t);
          }
          if (!this.checkValidity())
            return (
              Object(i.b)($(this).find("input")),
              $(this).addClass("was-validated"),
              !1
            );
          {
            const t = {
                roomBill: parseInt($("#room-bill-hidden").val(), 10),
                planName: $("#plan-name-hidden").val(),
                date: Object(a.b)(e),
                term: parseInt($("#term").val(), 10),
                headCount: parseInt($("#head-count").val(), 10),
                breakfast: $("#breakfast").prop("checked"),
                earlyCheckIn: $("#early-check-in").prop("checked"),
                sightseeing: $("#sightseeing").prop("checked"),
                username: $("#username").val(),
                contact: $("#contact").val(),
                email: $("#email").val(),
                tel: $("#tel").val(),
                comment: $("#comment").val(),
              },
              n = Object(o.c)();
            sessionStorage.setItem(n, JSON.stringify(t)),
              (document.cookie = "transaction=" + n);
          }
        });
    });
  },
]);
//# sourceMappingURL=reserve.bundle.js.map
