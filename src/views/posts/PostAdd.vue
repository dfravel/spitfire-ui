<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/posts">
                    <font-awesome-icon :icon="['fal', 'landmark-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Add a Post</div>
                    <div class="text-sm">
                        Please enter the post information
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.post.name.$error }">
                                <BaseFormLabel fieldLabel="Post Name" required="true" fieldName="name" />
                                <BaseTextInput
                                    v-model="post.name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Please enter the post's name"
                                    @blur="$v.post.name.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.post.contact.$error }">
                                <BaseFormLabel fieldLabel="Main Contact" required="true" fieldName="contact" />
                                <BaseTextInput
                                    v-model="post.contact"
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="Please enter the name of the main contact"
                                    @blur="$v.post.contact.$touch()"
                                />
                            </div>

                            <div
                                class="flex flex-col mb-6"
                                :class="{ invalid: $v.post.lat.$error || $v.post.lng.$error }"
                            >
                                <BaseFormLabel fieldLabel="Location (Lat/Lng)" required="true" fieldName="location" />

                                <BaseTextInput
                                    v-model="post.lat"
                                    type="text"
                                    name="lat"
                                    id="lat"
                                    class="mb-2"
                                    placeholder="Please enter the latitude"
                                    @blur="$v.post.lat.$touch()"
                                />
                                <BaseTextInput
                                    v-model="post.lng"
                                    type="text"
                                    name="lng"
                                    id="lng"
                                    class="mb-2"
                                    placeholder="Please enter the longitude"
                                    @blur="$v.post.lng.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Street Address" required="false" fieldName="address" />
                                <BaseTextInput
                                    v-model="post.address"
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Please enter the post's street address"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="City/Town" required="false" fieldName="city" />
                                <BaseTextInput
                                    v-model="post.city"
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Please enter the post's city/town/municipality"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="State" required="false" fieldName="state" />
                                <BaseTextInput
                                    v-model="post.state"
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="Please enter the post's state"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Postal Code" required="false" fieldName="postal_code" />
                                <BaseTextInput
                                    v-model="post.postal_code"
                                    type="text"
                                    name="postal_code"
                                    id="postal_code"
                                    placeholder="Please enter the post's postal code"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Country" required="false" fieldName="country_code" />
                                <BaseTextInput
                                    v-model="post.country_code"
                                    type="text"
                                    name="country_code"
                                    id="country_code"
                                    placeholder="Please enter the post's country"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Phone" required="false" fieldName="phone" />
                                <BaseTextInput
                                    v-model="post.phone"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Please enter the post's main phone number"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Email Address" required="false" fieldName="email" />
                                <BaseTextInput
                                    v-model="post.email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Please enter the post's main email address"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Website" required="false" fieldName="website" />
                                <BaseTextInput
                                    v-model="post.website"
                                    type="url"
                                    name="website"
                                    id="website"
                                    placeholder="Please enter the post's website (if known)"
                                />
                            </div>

                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Save Post Information
                            </BaseSubmitButton>
                            <p v-if="$v.$anyError" class="error">Please fill out the required field(s).</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        return {
            post: this.createFreshPostObject()
        };
    },
    validations: {
        post: {
            name: { required },
            contact: { required },
            lat: { required },
            lng: { required }
        }
    },
    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSubmitButton
    },
    methods: {
        createFreshPostObject() {
            return {
                name: "",
                contact: "",
                address: "",
                city: "",
                state: "",
                postal_code: "",
                country_code: "",
                phone: "",
                email: "",
                website: "",
                location: {
                    lng: "",
                    lat: ""
                }
            };
        },

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(this.post);
                this.$store
                    .dispatch("post/post", this.post)
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully submitted the post ${JSON.stringify(response.data)}`
                        );
                        this.$router.push({
                            path: `/posts`
                        });
                    })
                    .catch(error => {
                        this.$log.error(`there was an error with the form submission ${error}`);
                    });
            } else {
                this.$log.error("The form failed the validation rules");
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
