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
    n((n.s = 13));
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
      let i;
      for (
        let e = 0;
        e < r.length && ((i = n[r[e]]), "string" != typeof i);
        e++
      )
        n = n[r[e]];
      for (let t = 0; t < e.length; t++) i = i.replace("{}", e[t]);
      return i;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return c;
    }),
      n.d(t, "g", function () {
        return d;
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
        return g;
      }),
      n.d(t, "a", function () {
        return y;
      });
    const a = { ja: n(5), "en-US": n(6) },
      r = { ja: n(7), "en-US": n(8) },
      i = {
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
      o = {
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
      s = {
        ja: function (e) {
          return (
            e.getFullYear() + "/" + b(e.getMonth() + 1) + "/" + b(e.getDate())
          );
        },
        "en-US": function (e) {
          return (
            b(e.getMonth() + 1) + "/" + b(e.getDate()) + "/" + e.getFullYear()
          );
        },
      },
      l = {
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
      u = { ja: 1e3, "en-US": 10 };
    function c() {
      return $("html").attr("lang");
    }
    function d(e) {
      return (e = void 0 !== e ? e : c()), a[e];
    }
    function m(e) {
      return (e = void 0 !== e ? e : c()), r[e];
    }
    function f(e) {
      return (e = void 0 !== e ? e : c()), i[e];
    }
    function p(e) {
      return (e = void 0 !== e ? e : c()), o[e];
    }
    function h(e) {
      return (e = void 0 !== e ? e : c()), s[e];
    }
    function g(e) {
      return (e = void 0 !== e ? e : c()), l[e];
    }
    function y(e) {
      return (e = void 0 !== e ? e : c()), u[e];
    }
    function b(e) {
      return e < 10 ? "0" + e : "" + e;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return r;
    }),
      n.d(t, "g", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "h", function () {
        return s;
      }),
      n.d(t, "i", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return d;
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
    function i(e, t) {
      const n = r(e);
      return n && n.password === t;
    }
    function o() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)session\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }
    function s(e) {
      document.cookie = "session=" + e + "; max-age=630720000";
    }
    function l() {
      document.cookie = "session=; max-age=0";
    }
    function u() {
      return "" + (Math.floor(9e9 * Math.random()) + 1e9);
    }
    function c() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)transaction\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }
    function d() {
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
          l();
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
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      });
    var a = n(0);
    function r(e) {
      e.each(function () {
        this.setCustomValidity("");
      });
    }
    function i(e) {
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
    function o(e) {
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
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(2),
      r = n(4),
      i = n(0);
    Object(a.d)() && Object(a.j)(),
      $(function () {
        $("#login-form").submit(function () {
          if (
            (Object(r.a)($(this).find("input")),
            $("#email")[0].checkValidity() &&
              $("#password")[0].checkValidity() &&
              (Object(a.g)($("#email").val(), $("#password").val()) ||
                ($("#email")[0].setCustomValidity(
                  Object(i.a)("validation.mailOrAddressMismatch")
                ),
                $("#password")[0].setCustomValidity(
                  Object(i.a)("validation.mailOrAddressMismatch")
                ))),
            !this.checkValidity())
          )
            return (
              Object(r.b)($(this).find("input")),
              $(this).addClass("was-validated"),
              !1
            );
          Object(a.h)($("#email").val());
        });
      });
  },
]);
//# sourceMappingURL=login.bundle.js.map
