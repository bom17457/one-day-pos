<template>
  <q-card bordered flat>
    <q-card-section>
      <q-form class="q-gutter-md">
        <div class="text-h6 q-mt-lg q-mb-lg">Product</div>
        <div class="row q-gutter-md">
          <div class="col-3">
            <label class="text-weight-bold">Product ID (รหัสสินค้า)</label>
            <q-input
              class="text-weight-bold"
              placeholder="Product ID"
              type="text"
              outlined
              dense
              v-model="product.product_id"
            />
          </div>
          <div class="col-3">
            <label class="text-weight-bold">Product name (ชื่อสินค้า)</label>
            <q-input v-model="product.product_name" placeholder="Product name" type="text" outlined dense />
          </div>
          <div class="col-3">
            <label class="text-weight-bold">Description (รายละเอียด)</label>
            <q-input v-model="product.description" placeholder="Description" type="text" outlined dense />
          </div>
        </div>
        <div class="row q-mt-xl">
          <q-separator />
        </div>
        <div class="row">
          <div class="col">
            <div class="text-h6 q-mt-lg">Price</div>
          </div>
        </div>
        <div class="row q-gutter-md">
          <div class="col">
            <label class="text-weight-bold" for="unit_price"
              >Unit Price (ราคาขายต่อหน่วย)</label
            >
            <q-input
              name="unit_price"
              placeholder="Unit Price"
              type="number"
              outlined
              dense
              v-model="product.unit_price"
            />
          </div>
          <div class="col">
            <label class="text-weight-bold" for="unit_cost"
              >Unit Cost (ราคาต้นทุนต่อหน่วย)</label
            >
            <q-input
              name="unit_cost"
              placeholder="Unit Cost"
              type="number"
              outlined
              dense
              v-model="product.unit_cost"
            />
          </div>
          <div class="col">
            <label class="text-weight-bold" for="quantity"
              >Quantity (จำนวน)</label
            >
            <q-input name="quantity" v-model="product.quantity" placeholder="Quantity" type="number" outlined dense />
          </div>
          <div class="col">
            <label class="text-weight-bold" for="unit_cost"
              >Inventory value (มูลค่าสินค้าคงคลัง)</label
            >
            <q-field placeholder="Descriptions" type="text" outlined dense>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">
                  {{ inventory_value || 'Inventory value'  }}
                </div>
              </template>
            </q-field>
          </div>
        </div>
        <div class="row justify-start q-gutter-md">
          <q-btn no-caps color="positive" @click="create">Save</q-btn>
          <q-btn no-caps color="negative" @click="remove" >Reset</q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import product from "models/products";
export default {
  name: "product-form",
  data() {
    return {
      product: new product()
    };
  },
  computed: {
    inventory_value: {
      get() {
        return this.product.unit_cost * this.product.quantity
      }
    }
  },
  methods: {
    create() {
      this.$firebase.$firestore.collection('products').doc('test').set(this.product.$toJson())
      this.product.$save()
    },
    remove() {
      this.product = new product()
    }
  }
};
</script>

<style></style>
