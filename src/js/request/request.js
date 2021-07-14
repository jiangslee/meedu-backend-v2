import {
    get,
    post,
    put,
    destroy
} from './http';

const Api = {
    Auth: {
        Login(params) {
            return post('/backend/api/v1/login', params);
        }
    },
    Administrator: {
        Detail() {
            return get(`/backend/api/v1/user`);
        },
        ChangePassword(params) {
            return put(`/backend/api/v1/administrator/password`, params);
        }
    },
    Stat: {
        Statistic(id, params) {
            return get(`/backend/api/v1/statistic/${id}`, params);
        },
    },
    Role: {
        Info(params) {
            return get(`/backend/api/v1/role`, params);
        },
        Destory(id) {
            return destroy(`/backend/api/v1/role/${id}`);
        },
        Create(params) {
            return post(`/backend/api/v1/role`, params);
        },
        Detail(id) {
            return get(`/backend/api/v1/role/${id}`);
        },
        Update(id, params) {
            return put(`/backend/api/v1/role/${id}`, params);
        }
    },
    Order: {
        OrderList: {
            List(params) {
                return get(`/backend/api/v1/order`, params);
            },
        },
        PromoCode: {
            PromoCode(params) {
                return get(`/backend/api/v1/promoCode`, params);
            },
            DestroyMulti(params) {
                return post(`/backend/api/v1/promoCode/delete/multi`, params);
            },
            Create(params) {
                return post(`/backend/api/v1/promoCode`, params)
            },
            CreateMulti(params) {
                return post(`/backend/api/v1/promoCode/generator`, params)
            },
        },
        WithdrawOrders: {
            WithdrawOrders(params) {
                return get(`/backend/api/v1/member/inviteBalance/withdrawOrders`, params);
            },
        },

    },
    Media: {
        Image: {
            List(params) {
                return get(`/backend/api/v1/media/images`, params);
            }
        }
    },
    System: {
        Config: {
            All() {
                return get(`/backend/api/v1/setting`);
            },
            Save(params) {
                return post(`/backend/api/v1/setting`, params);
            }
        },
        Addons: {
            LocalList(params) {
                return get(`/backend/api/v1/addons`, params);
            },
            Repository(params) {
                return get(`/backend/api/v1/addons/repository`, params);
            },
            Install(params) {
                return get(`/backend/api/v1/addons/repository/install`, params);
            },
            Upgrade(params) {
                return get(`/backend/api/v1/addons/repository/upgrade`, params);
            },
            Switch(params) {
                return post(`/backend/api/v1/addons/switch`, params);
            }
        },
        administrator:{
            List(params) {
                return get(`/backend/api/v1/administrator`, params);
            },
            Create() {
                return get(`/backend/api/v1/administrator/create`);
            },
            Store(params) {
                return post(`/backend/api/v1/administrator`, params);
            },
            Destory(id) {
                return destroy(`/backend/api/v1/administrator/${id}`);
            },
            Detail(id) {
                return get(`/backend/api/v1/administrator/${id}`);
            },
            Update(id, params) {
                return put(`/backend/api/v1/administrator/${id}`, params);
            }
        },
        adminroles:{
            List(params) {
                return get(`/backend/api/v1/administrator_role`, params);
            },
            Create() {
                return get(`/backend/api/v1/administrator_role/create`);
            },
            Store(params) {
                return post(`/backend/api/v1/administrator_role`, params);
            },
        },
    },
    Member: {
        List(params) {
            return get(`/backend/api/v1/member`, params);
        },
        Create() {
            return get(`/backend/api/v1/member/create`);
        },
        Store(params) {
            return post(`/backend/api/v1/member`, params);
        },
        Edit(id) {
            return get(`/backend/api/v1/member/${id}`);
        },
        Update(id, params) {
            return put(`/backend/api/v1/member/${id}`, params);
        },
        Import(params) {
            return post(`/backend/api/v1/member/import`, params);
        }
    }
}

export default Api;