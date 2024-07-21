<script>
import './style.css'
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa'
export default {
  components: {
    Parcel
  },
  data() {
    return {
      parcelConfig: System.import("@acc/helpdesk"),
      mountParcel: mountRootParcel,
      wrapWith: 'div',
      wrapStyle: {
        position:'absolute',
        bottom:0,
        right:0
      }
    }
  },
  methods: {
    // These are the props passed into the parcel
    getParcelProps() {
      return {
        initiator: `Contact-us Vue Application`
      }
    },
    // Parcels mount asynchronously, so this will be called once the parcel finishes mounting
    parcelMounted() {
      console.log("parcel mounted");
    },
    parcelUpdated() {
      console.log("parcel updated");
    }
  }
}
</script>

<template>
  <div class="container">
    <br>
    <label id="title">Contact Us Application In the VueJS Framework on port 4176</label>
    <br>
    <h1>Contact Detail</h1>
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Phone</th>
          <th>Type</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
          <td> contact@accolitedigital.com </td>
          <td> 9991234567 </td>
          <td> Software Services </td>
          <td> 7th floor,magnum tower, Sector 58, Gurugram </td>
      </tbody>
    </table>
  </div>
  <div class="parcel-container">
      <Parcel
        v-on:parcelMounted="parcelMounted()"
        v-on:parcelUpdated="parcelUpdated()"
        :config="parcelConfig"
        :mountParcel="mountParcel"
        :wrapWith="wrapWith"
        :wrapClass="wrapClass"
        :wrapStyle="wrapStyle"
        :parcelProps="getParcelProps()"
      />
    </div>
</template>
