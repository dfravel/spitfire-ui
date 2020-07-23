<template>
    <div class="container mx-auto">
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
                    <div class="text-2xl">Upload Inspection-Related Files</div>
                    <div class="text-sm">
                        Please add your files
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <div class="flex flex-col mb-6">
                            <BaseFormLabel fieldLabel="Files (up to 5)" required="false" fieldName="files" />
                            <vue-dropzone
                                id="files"
                                :options="dropOptions"
                                ref="dropzone"
                                :useCustomSlot="true"
                                @vdropzone-sending="sendingEvent"
                                @vdropzone-complete="afterComplete"
                            >
                                <div class="dropzone-custom-content">
                                    <h3 class="dropzone-custom-title">Drag and drop to upload your files</h3>
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
        const vehicleId = this.$route.params.vehicleId;
        const inspectionId = this.$route.params.inspectionId;
        let dropOptions = {
            // url: `http://localhost:4000/api/v1/uploads/multiple/inspection/${this.$route.params.inspectionId}`,
            url: `http://ec2-52-54-99-190.compute-1.amazonaws.com/api/v1/uploads/multiple/inspection/${this.$route.params.inspectionId}`,
            paramName: "files",
            maxFilesize: 5, // MB
            maxFiles: 5,
            chunking: false,
            thumbnailWidth: 150, // px
            thumbnailHeight: 150,
            addRemoveLinks: true
        };

        return {
            vehicleId,
            inspectionId,
            dropOptions
        };
    },

    components: {
        BaseFormLabel,
        vueDropzone
    },
    methods: {
        sendingEvent(file, xhr, formData) {
            formData.append("vehicleId", this.vehicleId);
            formData.append("inspectionId", this.inspectionId);
        },
        afterComplete() {
            this.$router.push({
                path: `/vehicles/inspection/view/${this.vehicleId}/${this.inspectionId}`
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
