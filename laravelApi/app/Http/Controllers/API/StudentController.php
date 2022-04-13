<?php
namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index() {
        $students = Student::all();
        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }
    public function store(Request $request)
    {
         $request->validate([
        'name' => 'required|max:20|min:3',
        'course' => 'required|min:3|max:20',
        'email' => 'required|email',
        'phone' => 'required|min:10|max:10',
        ]);

        // if(!$validate) {
            $student = new Student;
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();
        return response()->json([
            'status' => 200,
            'me' => 'Student Added Successfully'
        ]);
        // }
        // else {
        //     // return response()->json([
        //     //     'status' => 'failed',
        //     //     'e' => '',
        //     // ]);
        // }
    }
    public function edit($id) {
        $student = Student::find($id);
        if ($student) {
            return response()->json([
                'status' => 200,
                'student' => $student,
            ]);
        }
        

    }
    public function update(Request $request, $id) {

        $student = Student::find($id);
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->update();
        return response()->json([
            'status' => 200,
            'message' => 'Student Updated Successfully',
        ]);
    }
    public function destroy($id) {
        $requests = array_unique(explode(',', $id));
        foreach ($requests as $request) {
            Student::where('id', '=', $request)->delete();
        }
        return response()->json([
            'status' => 200,
            'message' => count($requests)." Students Deleted Successfully",
        ]);
    }
    public function deleteAll() {

            DB::table('students')->truncate();
            return response()->json([
                'status' => 200,
                'message' => 'Deleted all'
            ]);
    }
    public function search($key) {
        $found = Student::find($key);
      if ($found) {
        return response()->json([
            'status' => 200,
            'searched' => $found,
        ]);
      }else {
            return response()->json([
                'status' => 200,
                'searched' => 'Error : Student Id is invalid',
            ]);
        }
    }
    public function searchStudent($key) {

        $res = Student::all();
        $found = [];
        foreach ($res as $student) {
            if (preg_match('!(.*)'.strtolower($key).'(.*)!', strtolower($student['name']))) {
                $student['name'] = str_replace($key, "<p class='text-warning'>".$key."</p>", $student['name']);
                array_push($found, $student);
            } elseif( preg_match('!(.*)'.strtolower($key).'(.*)!', strtolower($student['email']))) {
                $student['email'] = str_replace($key, "<p class='text-warning'>".$key."</p>", $student['email']);
                array_push($found, $student);

            }else if( preg_match('!(.*)'.strtolower($key).'(.*)!', strtolower($student['phone']))) {
                $student['phone'] = str_replace($key, "<p class='text-warning'>".$key."</p>", $student['phone']);
                array_push($found, $student);
            }
        }
        return response()->json([
            'status' => 200,
            'searched' => array_unique($found),
        ]);
    }

}
