
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, FileText, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Admission = () => {
  const admissionProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Fill out the admission form online or visit the school office",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit required documents for verification",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Interaction/Assessment",
      description: "Student interaction or assessment (for certain grades)",
      icon: Users
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Fee payment and admission confirmation",
      icon: Calendar
    }
  ];

  const requirements = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Leaving Certificate (if applicable)",
    "Mark sheets/Report cards of previous classes",
    "Caste Certificate (if applicable)",
    "Income Certificate (for fee concessions)",
    "Medical Certificate",
    "Passport size photographs (6 copies)",
    "Aadhar Card copy (Student & Parents)",
    "Address Proof",
    "Bank Account Details for fee payment"
  ];

  const feeStructure = [
    { grade: "Nursery - UKG", admission: "₹2,500", tuition: "₹1,800", annual: "₹8,000" },
    { grade: "Grade 1-5", admission: "₹3,000", tuition: "₹2,200", annual: "₹10,000" },
    { grade: "Grade 6-8", admission: "₹3,500", tuition: "₹2,800", annual: "₹12,000" },
    { grade: "Grade 9-10", admission: "₹4,000", tuition: "₹3,200", annual: "₹15,000" },
    { grade: "Grade 11-12", admission: "₹4,500", tuition: "₹3,800", annual: "₹18,000" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open</h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our learning community and embark on a journey of academic excellence
            </p>
            <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Admissions for Academic Year 2024-25 are now open!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple and transparent admission process designed for your convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {admissionProcess.map((step, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Online Admission Inquiry
              </h2>
              <p className="text-lg text-gray-600">
                Fill out this form to begin your admission process
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
                <CardDescription>Please provide accurate information for processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input id="studentName" placeholder="Enter student's full name" />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input id="dateOfBirth" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="grade1">Grade 1</SelectItem>
                        <SelectItem value="grade2">Grade 2</SelectItem>
                        <SelectItem value="grade3">Grade 3</SelectItem>
                        <SelectItem value="grade4">Grade 4</SelectItem>
                        <SelectItem value="grade5">Grade 5</SelectItem>
                        <SelectItem value="grade6">Grade 6</SelectItem>
                        <SelectItem value="grade7">Grade 7</SelectItem>
                        <SelectItem value="grade8">Grade 8</SelectItem>
                        <SelectItem value="grade9">Grade 9</SelectItem>
                        <SelectItem value="grade10">Grade 10</SelectItem>
                        <SelectItem value="grade11">Grade 11</SelectItem>
                        <SelectItem value="grade12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
                  <Input id="previousSchool" placeholder="Name of previous school" />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Parent/Guardian Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input id="fatherName" placeholder="Father's full name" />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input id="motherName" placeholder="Mother's full name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                      <Input id="fatherOccupation" placeholder="Father's occupation" />
                    </div>
                    <div>
                      <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                      <Input id="motherOccupation" placeholder="Mother's occupation" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Contact Number *</Label>
                      <Input id="phone" placeholder="10-digit mobile number" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea id="address" placeholder="Enter complete address with pincode" />
                  </div>

                  <div>
                    <Label htmlFor="remarks">Additional Information/Remarks</Label>
                    <Textarea id="remarks" placeholder="Any additional information you'd like to share" />
                  </div>
                </div>

                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  Submit Admission Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Required Documents</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Dates</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      <div>
                        <p className="font-semibold">Application Start Date</p>
                        <p className="text-gray-600">January 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      <div>
                        <p className="font-semibold">Application Last Date</p>
                        <p className="text-gray-600">March 31, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-900" />
                      <div>
                        <p className="font-semibold">Interaction/Assessment</p>
                        <p className="text-gray-600">April 1-15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-semibold">Admission Confirmation</p>
                        <p className="text-gray-600">April 20, 2024 onwards</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Grade</th>
                        <th className="px-6 py-4 text-center">Admission Fee</th>
                        <th className="px-6 py-4 text-center">Monthly Tuition</th>
                        <th className="px-6 py-4 text-center">Annual Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-semibold">{fee.grade}</td>
                          <td className="px-6 py-4 text-center">{fee.admission}</td>
                          <td className="px-6 py-4 text-center">{fee.tuition}</td>
                          <td className="px-6 py-4 text-center">{fee.annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                * Fee concessions available for economically weaker sections (EWS) and meritorious students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help with Admissions?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our admission counselors are here to help you through the process
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Visit Our Office</h4>
                  <p className="text-sm">Monday - Saturday: 9:00 AM - 4:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-sm">+91-XXXX-XXXXXX</p>
                  <p className="text-sm">Admission Helpline</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-sm">admissions@asthavidyamandir.edu.in</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
