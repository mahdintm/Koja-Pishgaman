import ActiveDirectory from "activedirectory";
var config = {
  url: "ldap://10.254.1.25",
  baseDN: "dc=agahpardazan,dc=ir",
  bindDN: "auth@agahpardazan.ir",
  bindCredentials: "ICT159753ict",
};
var ad = new ActiveDirectory(config);
var username = "mahdinemati@agahpardazan.ir";
var password = "Afzllqll2@";
export class LDAP {
  static authenticate = (user, pass) => {
    return new Promise((resolve, error) => {
      ad.find(`mail=${user}`, function (err, results) {
        if (err || !results) {
          console.log("ERROR: " + JSON.stringify(err));
          return;
        }
        ad.authenticate(results.users[0].userPrincipalName, pass, async (err, auth) => {
          if (err) {
            resolve([false]);
          }
          if (auth) {
            ad.findUser(results.users[0].userPrincipalName, (err, adUser) => {
              resolve([auth, adUser]);
            });
          } else {
            resolve([false]);
          }
        });
      });
    });
  };
}

// console.log(await LDAP.authenticate("masoumeh@divar.ir", "123123aA"));
