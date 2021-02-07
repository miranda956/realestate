export const PropertyGetters = {
    
    allproperties: (state, getters) => {
      return state.properties
    },
    
    propertyById: (state, getters) => id => {
      if (getters.allproperties.length > 0) {
        return getters.allproperties.filter(property => property._id === id)[0]
      } else {
        return state.property
      }
    },
  }


  export const clientGetters = {
    
    allclients: (state, getters) => {
      return state.client
    },
    
    clientById: (state, getters) => id => {
      if (getters.allclients.length > 0) {
        return getters.allclients.filter(client => client._id === id)[0]
      } else {
        return state.client 
      }
    },
  }

  export const ownerGetters = {
    
    allowners: (state, getters) => {
      return state.owners
    },
    
    ownerById: (state, getters) => id => {
      if (getters.allowners.length > 0) {
        return getters.allowners.filter(owner => owner._id === id)[0]
      } else {
        return state.owner
      }
    },
  }

  export const adminGetters = {
    
    alladmin: (state, getters) => {
      return state.admin
    },
    
    adminById: (state, getters) => id => {
      if (getters.alladmins.length > 0) {
        return getters.alladmins.filter(admin => admin._id === id)[0]
      } else {
        return state.admin
      }
    },
  }