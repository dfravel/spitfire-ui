<template>
    <div>
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" :to="{ path: '/vehicles/view/' + this.vehicleId }">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Upload a vehicle Image</div>
                    <div class="text-sm">
                        Please add the vehicle image
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <div class="flex flex-col mb-6">
                            <BaseFormLabel
                                fieldLabel="Image (only upload one file)"
                                required="false"
                                fieldName="vehicle_image"
                            />
                            <vue-dropzone
                                id="vehicleImage"
                                :options="dropOptions"
                                ref="dropzone"
                                :useCustomSlot="true"
                                @vdropzone-sending="sendingEvent"
                                @vdropzone-complete="afterComplete"
                            >
                                <div class="dropzone-custom-content">
                                    <h3 class="dropzone-custom-title">Drag and drop to upload your image</h3>
                                </div>
                            </vue-dropzone>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
// import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        const vehicleId = this.$route.params.id;
        let dropOptions = {
            //url: `http://localhost:4000/api/v1/uploads/vehicle/${this.$route.params.id}`,
            url: `http://ec2-52-54-99-190.compute-1.amazonaws.com/api/v1/uploads/vehicle/${this.$route.params.id}`,
            paramName: "vehicleImage",
            maxFilesize: 2, // MB
            maxFiles: 1,
            chunking: false,
            thumbnailWidth: 150, // px
            thumbnailHeight: 150,
            addRemoveLinks: true
        };

        return {
            vehicleId,
            dropOptions
        };
    },

    components: {
        BaseFormLabel,
        vueDropzone
    },
    methods: {
        sendingEvent(file, xhr, formData) {
            formData.append("id", this.vehicleId);
        },
        afterComplete() {
            this.$router.push({
                path: `/vehicles/view/` + this.vehicleId
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
