import React from "react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  // Validate
  // Insert To DB
  // Return
  console.log("Create Profile Server", firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Your Profile
      </h1>
      <div className="border p-8 rounded-sm ">
        <form action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4 mb-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Input Your First Name"
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Input Your Last Name"
            />
            <FormInput
              name="userName"
              type="text"
              label="User Name"
              placeholder="Input Your User Name"
            />
          </div>
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
