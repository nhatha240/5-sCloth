// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import router from './../router'
export default function auth({ next, store, from, to }) {
    const loginQuery = { path: "/login", query: { redirect: to.fullPath } }
    const prevRoute = { path: to.path, query: to.query }
    if (from.name === undefined && to?.query?.userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(to?.query))
        store.setUserToken(to?.query?.token)
        store.setUser(to?.query)
        router.push('/')
    }
    if (!store.isUserAuthenticated) {
        store.clearStoreAuth()
        next({ path: "/login" });
    } else {
        if (!store || !store.loggedUser) {
            store.userInfo().then(() => {
                try {
                    next();
                } catch (e) {
                    store.clearStoreAuth()
                    next(loginQuery);
                }
            });
        }
        next();
    }
    return
}
