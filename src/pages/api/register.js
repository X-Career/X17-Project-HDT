export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, username, password } = req.body;

    // Xử lý yêu cầu đăng ký tại đây, ví dụ: lưu thông tin người dùng vào cơ sở dữ liệu

    res.status(200).json({ 
      message: 'Đăng ký thành công!' 
    });
  } else {
    res.status(405).json({ message: 'Phương thức không được hỗ trợ!' });
  }
}