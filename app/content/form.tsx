"use client";
import Upload from "@/app/content/upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  companyName: z.string().min(3).max(100),
  companySite: z.string().url(),
  companyLinkedIn: z.string().url(),
  companyIndustry: z.string().min(3).max(100),
  companyDescription: z.string().min(3).max(255),
  companyGoals: z.string().min(3).max(255),
  companyHq: z.string().min(3).max(255),
  fundingRound: z.string().min(3).max(100),
  faqs: z.string().url(),
});

const FormContainer = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "Sixteen Inc.",
      companySite: "https://sixteen.life/",
      companyLinkedIn: "https://www.linkedin.com/company/sixteenlife",
      companyIndustry: "Digital Wellbeing",
      companyDescription: "Redesign your digital life, reduce your screen time",
      companyGoals:
        "Help everyone to be more conscious of where they are spending their time",
      companyHq: "Delhi, India",
      fundingRound: "Seed",
      faqs: "https://sixteen.life/faq",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      description: "Your form is valid!",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="formTop flex flex-row justify-between my-10">
          <Upload />
          <div className="btns">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </div>
        <div className="formBx">
          <div className="formRow">
            <div className="inputBx w-[48%]">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#17171F]/[.7] text-sm">
                      Company's Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="inputBx w-[48%]">
              <FormField
                control={form.control}
                name="companySite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#17171F]/[.7] text-sm">
                      Company's Website
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company website" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="formRow">
            <div className="inputBx w-[48%]">
              <FormField
                control={form.control}
                name="companyLinkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#17171F]/[.7] text-sm">
                      Company's LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company linkedIn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="inputBx w-[48%]">
              <FormField
                control={form.control}
                name="companyIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#17171F]/[.7] text-sm">
                      Company's Industry
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company industry" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-8 w-[50%]">
            <p className=" mb-3 text-sm">Employee Count</p>
            {/* <div className="mt-3">
              <Badge>1-10</Badge>
              <Badge>10-100</Badge>
              <Badge>100-500</Badge>
              <Badge>1000+</Badge>
            </div> */}
          </div>
          <div className="inputBx w-[100%] mt-10">
            <FormField
              control={form.control}
              name="companyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#17171F]/[.7] text-sm">
                    Company description
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter company description" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your detailed company description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>

          <div className="inputBx w-[100%] mt-10">
            <FormField
              control={form.control}
              name="companyGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#17171F]/[.7] text-sm">
                    What are your company goals?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company goals" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="inputBx w-[100%] mt-10">
              <FormField
                control={form.control}
                name="companyHq"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#17171F]/[.7] text-sm">
                      Headquaters
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your company headquaters"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="formRow">
              <div className="inputBx w-[48%] mt-10">
                <FormField
                  control={form.control}
                  name="fundingRound"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Round</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose Funding Round" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Seed">Seed</SelectItem>
                          <SelectItem value="Series A">Series A</SelectItem>
                          <SelectItem value="Series B">Series B</SelectItem>
                          <SelectItem value="Series C">Series C</SelectItem>
                          <SelectItem value="Series D">Series D</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="inputBx w-[48%] mt-10">
                <FormField
                  control={form.control}
                  name="faqs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#17171F]/[.7] text-sm">
                        FAQs
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your FAQs" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormContainer;
