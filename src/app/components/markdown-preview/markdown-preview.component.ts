import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.sass']
})
export class MarkdownPreviewComponent implements OnInit {
  markdown: string | undefined;
  constructor(private mdService: MarkdownService, private http: HttpClient) { }

  async ngOnInit() {
    const markdownRaw = await this.http.get('/markdown-files/markdown.md', 
      { responseType: 'text' }).toPromise();   
    this.markdown = this.mdService.compile(markdownRaw);
  }

}
