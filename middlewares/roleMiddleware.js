import tokenService from "#authService/TokenService";

export default (roles) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
      }
      try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(403).json("Пользователь не авторизован")
        }
        let thisRoles = tokenService.validateAccessToken(token).userRoles
        let hasRole = false
        thisRoles.forEach(role => {
            let rolesToUpper = role.toUpperCase() 
            if(roles.includes(rolesToUpper)){
                hasRole = true
            }
        });
        if(hasRole == false){
            return res.status(403).json("У тебя нет прав чёрт")
        }
        next()
        } catch (err) {
            return res.status(403).json(`hui error${err}`)
      }
  };
};
