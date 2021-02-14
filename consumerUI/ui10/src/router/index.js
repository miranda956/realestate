import vue from "vue";
import Router from "vue-router";
import Createclient from "../components/Client/Createclient.vue";
import updateclient from "../components/Client/updateClent.vue";
import clientprofile from "../components/Client/clientProfile.vue";
import listproperty from "../components/Property/Listproperty.vue";
import detailproperty from "../components/Property/detailproperty.vue";
import login from "../components/shared/login.vue";
import navbar from "../components/shared/Navbar.vue";
import footer from "../components/shared/footer.vue";
vue.use(Router)

export default new Router ({

    routes:[
        {
            path:"/createclient",
            name:"createclient",
            component:Createclient
        },
        {

            path:"/login",
            name:"login",
            component:login
        }, 
        {
            path:"/updateclient",
            name:"updateclient",
            component:updateclient
        },
        {
            path:"/clientprofile",
            name:"clientprofile",
            component:clientprofile
        },
        {
            path:"/listproperty",
            name:"listproperty",
            component:listproperty
        }, 
        {
            path:"/detailproperty",
            name:"detailproperty",
            component:detailproperty

        },
        {
            path:"/footer",
            name:"footer",
            component:footer
        },
        {
            path:"/navbar",
            name:"navbar",
            component:navbar
        }

    ]
})