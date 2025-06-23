"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";

const SpeechAnalysis = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startRecording = () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Your browser doesn't support voice recognition. Try using Google Chrome.");
    return;
  }

  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsRecording(true);
  };

  recognition.onresult = (event: any) => {
    const result = event.results[0][0].transcript;
    setTranscript(result);
    setIsRecording(false);
    analyzeSymptoms(result);
  };

  recognition.onerror = (event: any) => {
    console.error("Speech Recognition Error:", event.error);
    setIsRecording(false);
  };

  recognition.start();
};


  const stopRecording = () => {
    setIsRecording(false);
  };

const analyzeSymptoms = (input: string) => {
  setIsAnalyzing(true);
  setTimeout(() => {
    setAnalysis(`Based on your symptoms: "${input}", this could indicate:

**Possible Conditions:**
• Migraine
• Tension headache
• Sinus infection
• Dehydration

**Recommendations:**
• Rest in a dark, quiet room
• Stay hydrated
• Consider over-the-counter medicine

**When to seek care:**
• If headache is sudden and severe
• If you have fever or stiff neck

**Next Steps:**
• Monitor symptoms for 24–48 hours
• Visit a doctor`);
    setIsAnalyzing(false);
  }, 2000);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Speech Analysis</h1>
          <p className="text-xl text-gray-600">Describe your symptoms using voice commands for instant medical insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recording Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="w-6 h-6 mr-2 text-blue-600" />
                Voice Recording
              </CardTitle>
              <CardDescription>
                Click the microphone to start describing your symptoms
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <Button
                  size="lg"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-32 h-32 rounded-full ${
                    isRecording 
                      ? "bg-red-600 hover:bg-red-700 animate-pulse" 
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isRecording ? (
                    <MicOff className="w-12 h-12" />
                  ) : (
                    <Mic className="w-12 h-12" />
                  )}
                </Button>
              </div>
              
              <p className="text-gray-600 mb-4">
                {isRecording ? "Listening... Speak clearly about your symptoms" : "Click to start recording"}
              </p>

              {transcript && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Transcript:
                  </h4>
                  <p className="text-gray-700 text-left">{transcript}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-purple-600" />
                AI Analysis
              </CardTitle>
              <CardDescription>
                Medical insights based on your described symptoms
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing your symptoms...</p>
                </div>
              ) : analysis ? (
                <div className="space-y-4">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Analysis complete. Please note this is for informational purposes only and does not replace professional medical advice.
                    </AlertDescription>
                  </Alert>
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">{analysis}</pre>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <Button className="flex-1">Find Nearby Doctors</Button>
                    <Button variant="outline" className="flex-1">Save to Records</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Start recording to get AI-powered medical insights</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Emergency Alert */}
        <Alert className="mt-8 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Emergency:</strong> If you are experiencing a medical emergency, please call 108 or go to the nearest emergency room immediately.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default SpeechAnalysis;
