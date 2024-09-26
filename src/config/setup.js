import AdminJS from "adminjs";
import AadminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from '@adminjs/mongoose'
import * as Models from '../models/index.js'

AdminJS.registerAdadpter(AdminJSMongoose)

export const admin = new AdminJS({
  resources: [
  {
  resource: Models.Customer,
  options: {
    listproperties: ["phone", "role","isActivated"],
    filterproperties: ["phone","role"],
  },
  },
  {
    resource: Models.DeliveryPartner,
    options: {
      listproperties: ["email", "role","isActivated"],
      filterproperties: ["email","role"],
    },
  },
  {
    resource: Models.Admin,
    options: {
      listproperties: ["email", "role","isActivated"],
      filterproperties: ["email","role"],
    },
  },
  {
    resource: Models.Branch    
  },
],
     branding:{
         companyName: "Blinkit",
         withMadeWithLove: false,
   },
  rootPath:"/admin",
});

export const buildAdminRouter = async(app)=>{
  await AdminJSFastify.buildAuthenticatedRouter(
    admin,
    {

    },
    app,
    {

    },
  )
}