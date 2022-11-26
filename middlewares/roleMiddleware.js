export default (roles) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
      }
      try {
        const token = req.headers.authorization.split('')[1]
        if(!token){
            return res.status(403).json("Пользователь не авторизован")
        }
        const {userRoles} = tokenService.validateAccessToken(token);
        const hasRole = false
        userRoles.forEach(role => {
            if(roles.includes(role)){
                hasRole =true
            }
        });
        if(hasRole == false){
            return res.status(403).json("У тебя нет прав чёрт")
        }
        next
        } catch (err) {
            return res.status(403).json(`hui error${err}`)
      }
  };
};
