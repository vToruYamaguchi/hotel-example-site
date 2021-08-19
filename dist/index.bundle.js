!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var a = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          t.d(
            r,
            a,
            function (n) {
              return e[n];
            }.bind(null, a)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 12));
})([
  ,
  function (e, n, t) {
    "use strict";
    t.d(n, "f", function () {
      return c;
    }),
      t.d(n, "g", function () {
        return d;
      }),
      t.d(n, "h", function () {
        return m;
      }),
      t.d(n, "b", function () {
        return f;
      }),
      t.d(n, "c", function () {
        return p;
      }),
      t.d(n, "d", function () {
        return h;
      }),
      t.d(n, "e", function () {
        return g;
      }),
      t.d(n, "a", function () {
        return y;
      });
    const r = { ja: t(5), "en-US": t(6) },
      a = { ja: t(7), "en-US": t(8) },
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
          const n = e.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
          if (!n || 4 !== n.length) return null;
          const t = parseInt(n[1], 10),
            r = parseInt(n[2], 10),
            a = parseInt(n[3], 10);
          return new Date(t, r - 1, a);
        },
        "en-US": function (e) {
          const n = e.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
          if (!n || 4 !== n.length) return null;
          const t = parseInt(n[3], 10),
            r = parseInt(n[1], 10),
            a = parseInt(n[2], 10);
          return new Date(t, r - 1, a);
        },
      },
      u = { ja: 1e3, "en-US": 10 };
    function c() {
      return $("html").attr("lang");
    }
    function d(e) {
      return (e = void 0 !== e ? e : c()), r[e];
    }
    function m(e) {
      return (e = void 0 !== e ? e : c()), a[e];
    }
    function f(e) {
      return (e = void 0 !== e ? e : c()), o[e];
    }
    function p(e) {
      return (e = void 0 !== e ? e : c()), i[e];
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
  function (e, n, t) {
    "use strict";
    t.d(n, "f", function () {
      return a;
    }),
      t.d(n, "g", function () {
        return o;
      }),
      t.d(n, "d", function () {
        return i;
      }),
      t.d(n, "h", function () {
        return s;
      }),
      t.d(n, "i", function () {
        return l;
      }),
      t.d(n, "c", function () {
        return u;
      }),
      t.d(n, "e", function () {
        return c;
      }),
      t.d(n, "b", function () {
        return d;
      }),
      t.d(n, "j", function () {
        return m;
      }),
      t.d(n, "k", function () {
        return f;
      }),
      t.d(n, "a", function () {
        return p;
      });
    var r = t(1);
    function a(e) {
      const n = Object(r.h)();
      let t = null;
      for (let r = 0; r < n.length; r++)
        if (n[r].email === e) {
          t = n[r];
          break;
        }
      return t
        ? ((t.preset = !0), t)
        : ((t = localStorage.getItem(e)), t ? JSON.parse(t) : null);
    }
    function o(e, n) {
      const t = a(e);
      return t && t.password === n;
    }
    function i() {
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
    function p(e, n) {
      return (
        !e.only ||
        (!!n &&
          ("member" === e.only ||
            ("premium" === e.only ? "premium" === n.rank : void 0)))
      );
    }
  },
  ,
  ,
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
  function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(2);
    $(function () {
      Object(r.d)() && Object(r.k)();
    });
  },
]);
//# sourceMappingURL=index.bundle.js.map
