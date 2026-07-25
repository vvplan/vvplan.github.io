from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]


class XEduClientShowcaseTest(unittest.TestCase):
    def test_homepage_promotes_detail_page(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")

        self.assertIn("2026 重点项目", html)
        self.assertIn("面向 AI 教学场景的桌面实验工作台", html)
        self.assertIn('href="xedu-client.html"', html)
        self.assertIn('src="images/xedu-client/course-task-center.png"', html)

    def test_detail_page_has_truthful_resource_routes(self):
        html = (ROOT / "xedu-client.html").read_text(encoding="utf-8")

        self.assertIn("下载 V2.0 体验版", html)
        self.assertIn("预发布", html)
        self.assertIn("images/xedu-client/course-task-center.png", html)
        self.assertIn("images/xedu-client/interactive-experience.png", html)
        self.assertIn("images/xedu-client/scratch-workbench.png", html)
        self.assertIn("images/xedu-client/python-jupyter-lab.png", html)
        self.assertIn(
            "https://github.com/haitao926/xedu-client/releases/tag/V2.0", html
        )
        self.assertIn("https://github.com/XEduPro/xedu-client", html)
        self.assertIn("docs/teacher/INSTALL.md", html)

    def test_xedu_client_is_listed_as_an_openhydra_peer(self):
        homepage = (ROOT / "index.html").read_text(encoding="utf-8")
        ai_page = (ROOT / "ai.html").read_text(encoding="utf-8")
        list_page = (ROOT / "list.html").read_text(encoding="utf-8")

        self.assertIn("九大核心项目", homepage)
        self.assertRegex(
            homepage,
            r'href="xedu-client\.html"[^>]*class="project-scroll-card"',
        )
        self.assertRegex(
            ai_page,
            r'href="xedu-client\.html"[^>]*class="ai-card [^"]+"',
        )
        self.assertIn('data-project="XEdu Client"', list_page)
        self.assertIn('data-homepage="xedu-client.html"', list_page)

        for page_name in (
            "index.html",
            "about.html",
            "maker.html",
            "ai.html",
            "ecosystem.html",
            "list.html",
            "xedu-client.html",
        ):
            html = (ROOT / page_name).read_text(encoding="utf-8")
            self.assertIn(
                '<a href="xedu-client.html">XEdu Client</a>',
                html,
                f"{page_name}: missing XEdu Client popular-project entry",
            )

    def test_local_page_assets_exist(self):
        for page_name in (
            "index.html",
            "about.html",
            "maker.html",
            "ai.html",
            "ecosystem.html",
            "list.html",
            "xedu-client.html",
        ):
            html = (ROOT / page_name).read_text(encoding="utf-8")
            for value in re.findall(r'(?:href|src)="([^"]+)"', html):
                if value.startswith(
                    ("http://", "https://", "mailto:", "#", "/")
                ) or "${" in value:
                    continue

                path = value.split("#", 1)[0].split("?", 1)[0]
                if path:
                    self.assertTrue(
                        (ROOT / path).exists(), f"{page_name}: missing {path}"
                    )


if __name__ == "__main__":
    unittest.main()
