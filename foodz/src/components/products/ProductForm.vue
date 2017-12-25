<template>
    <form @submit.prevent="saveProduct">

        <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Name" v-model="model.name" class="form-control" name="name"></input>
        </div>

        <div class="form-group">
            <label>Price</label>
            <input type="number" placeholder="$$$" v-model="model.price" class="form-control" name="price"></input>
        </div>

        <div class="form-group">
            <label>Manufacturer</label>
            <select type="text" placeholder="Who made this?" v.model="model.manufacturer" class="form-control" name="manufacturer">
                <template v-for="manufacturer in manufacturers">
                    <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">
                    {{manufacturer.name}}
                    </option>
                </template>
            </select>
        </div>

        <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" placeholder="Image" v-model="model.image" name="image"></input>
        </div>

        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" placeholder="description" rows="5" v-model="model.description" name="description"></textarea>
        </div>
        
        <button class="button">
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
        </button>

    </form>
</template>

<script>

    export default {
        props: ['model', 'isEditing']
    },
    methods: {
        saveProduct () {
            this.$emit('save-product', this.model)
        }
    }

</script>
